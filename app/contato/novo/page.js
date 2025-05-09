'use client'

import { useState } from "react"
import { Salvar } from "../action.js";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function Novo() {
    const [busy, setBusy] = useState(false);
    const [dados, setDados] = useState({ nome: '', idade: '' });

    const router = useRouter();

    const handleChange = (e) => {
        setDados(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSalvar = async (e) => {
        e.preventDefault();
        setBusy(true);

        try {
            const resultado = await Salvar(dados);

            if (resultado && resultado.id) {
                router.push(`/contato/${resultado.id}/telefone?sucesso=1`);
            }
        } catch {
            Swal.fire({
                text: "Erro ao salvar o contato",
                icon: 'error',
                timer: 3000,
                toast: true,
                position: "top-right",
                showConfirmButton: false
            });
        }

        setBusy(false);
    }

    return (
        <div className="mt-4 ml-4">
            <form onSubmit={handleSalvar} className="flex flex-col gap-4 max-w-md">
                <label>
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        required
                        className="bg-neutral-50 border px-2 py-1 w-full"
                        value={dados.nome}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Idade:
                    <input
                        type="number"
                        name="idade"
                        required
                        className="bg-neutral-50 border px-2 py-1 w-full"
                        value={dados.idade}
                        onChange={handleChange}
                    />
                </label>

                <button
                    type="submit"
                    disabled={busy}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
                >
                    {busy ? "Salvando..." : "Salvar Contato"}
                </button>
            </form>
        </div>
    )
}