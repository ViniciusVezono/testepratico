'use client'

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Swal from "sweetalert2";
import { Obter, Atualizar } from "../../action";

export default function EditContato() {
    const [busy, setBusy] = useState(false);
    const [contato, setContato] = useState({ nome: "", idade: "" });
    const router = useRouter();
    const { id } = useParams(); 

    useEffect(() => {
        const loadContato = async () => {
            setBusy(true);
            const data = await Obter(id);
            if (data) {
                setContato({ nome: data.nome, idade: data.idade });
            } else {
                Swal.fire({
                    text: "Contato não encontrado",
                    icon: "error",
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                });
                router.push("/contato");
            }
            setBusy(false);
        };
        loadContato();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBusy(true);

        try {
            const resultado = await Atualizar({ id, ...contato });
            if (resultado) {
                Swal.fire({
                    text: "Contato atualizado com sucesso",
                    icon: "success",
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                });
                router.push(`/contato?sucesso=1`);             
            } else {
                throw new Error("Falha ao atualizar contato");
            }
        } catch (error) {
            Swal.fire({
                text: "Erro ao atualizar o contato",
                icon: "error",
                timer: 3000,
                toast: true,
                position: "top-right",
                showConfirmButton: false
            });
        }

        setBusy(false);
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Editar Contato</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">
                        Nome
                        <input
                            type="text"
                            className="bg-gray-100 w-full px-2 py-1 mt-1 border rounded"
                            value={contato.nome}
                            onChange={(e) => setContato(p => ({ ...p, nome: e.target.value }))}
                            required
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">
                        Idade
                        <input
                            type="number"
                            className="bg-gray-100 w-full px-2 py-1 mt-1 border rounded"
                            value={contato.idade}
                            onChange={(e) => setContato(p => ({ ...p, idade: e.target.value }))}
                            required
                        />
                    </label>
                </div>
                <div className="flex gap-4">
                    <button
                        type="submit"
                        disabled={busy}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-200"
                    >
                        {busy ? "..." : "Salvar"}
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push("/contato")}
                        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}