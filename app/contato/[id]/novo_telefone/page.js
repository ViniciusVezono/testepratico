'use client'

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Swal from "sweetalert2";
import { SalvarTelefone } from "../telefone/action";  // Importing the correct function

export default function NovoTelefone() {
    const [busy, setBusy] = useState(false);
    const [numero, setnumero] = useState("");
    const router = useRouter();
    const { id } = useParams(); // Get the contact ID from the URL

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBusy(true);

        try {
            // Call the Salvarnumero action to add the new phone number
            const resultado = await SalvarTelefone({ numero, contatoId: id });
            if (resultado) {
                Swal.fire({
                    text: "Telefone adicionado com sucesso",
                    icon: "success",
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                });
                router.push(`/contato?sucesso=1`); // Redirect to the main contacts page
            } else {
                throw new Error("Falha ao adicionar telefone");
            }
        } catch (error) {
            Swal.fire({
                text: "Erro ao adicionar o telefone",
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
            <h1 className="text-2xl font-bold mb-4">Adicionar Novo Telefone</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">
                        Telefone
                        <input
                            type="text"
                            className="bg-gray-100 w-full px-2 py-1 mt-1 border rounded"
                            value={numero}
                            onChange={(e) => setnumero(e.target.value)}
                            placeholder="Digite o telefone"
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
                        {busy ? "..." : "Adicionar"}
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