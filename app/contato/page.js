'use client'

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { PesquisarPorNome, Remover } from "./action";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Contato() {
    const [busy, setBusy] = useState(false);
    const [dados, setDados] = useState([]);
    const [atualizar, setAtualizar] = useState(true);
    const [pesquisaobj, setPesquisaObj] = useState({ nome: '' });

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleAtualizar = async () => {
        setBusy(true);

        try {
            const contatos = await PesquisarPorNome({ nome: pesquisaobj.nome });
            setDados(contatos);
        } catch {
            Swal.fire({
                text: "Erro ao buscar os dados",
                icon: 'error',
                timer: 3000,
                toast: true,
                position: "top-right",
                showConfirmButton: false
            });
        }

        setAtualizar(false);
        setBusy(false);
    };

    const handleRemover = async (id) => {
        const resposta = confirm('Deseja realmente remover este contato?');
        if (resposta) {
            setBusy(true);
            const resultado = await Remover(id);
            if (resultado) {
                setAtualizar(true);
                Swal.fire({
                    text: "Contato removido com sucesso",
                    icon: 'success',
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                });
            } else {
                Swal.fire({
                    text: "Erro ao remover o contato informado",
                    icon: 'error',
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                });
            }
            setBusy(false);
        }
    };

    useEffect(() => {
        if (atualizar) {
            handleAtualizar();

            if (searchParams.get("sucesso") === "1") {
                Swal.fire({
                    text: "Contato salvo com sucesso",
                    icon: 'success',
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false
                });

                router.replace("/contato");
            }
        }
    }, [atualizar]);


    return (
        <>
            <div className="mb-4">
                <label>
                    Nome
                    <input
                        type="text"
                        className="bg-gray-100 ml-2 px-2 py-1"
                        value={pesquisaobj.nome}
                        onChange={(e) => setPesquisaObj(p => ({ ...p, nome: e.target.value }))}
                    />
                </label>
                <button
                    disabled={busy}
                    className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-200"
                    onClick={() => setAtualizar(true)}
                >
                    {busy ? "..." : "Atualizar"}
                </button>
                <Link
                    href="/contato/novo"
                    className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Novo
                </Link>
            </div>

            <p className="font-bold mb-2">Contatos disponíveis</p>

            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2">Nome</th>
                        <th className="border px-4 py-2">Telefone(s)</th>
                        <th className="border px-4 py-2">Idade</th>
                        <th className="border px-4 py-2">Editar</th>
                        <th className="border px-4 py-2">Adicionar Telefone</th>
                        <th className="border px-4 py-2">Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map(p => (
                        <tr key={p.id}>
                            <td className="border px-4 py-2">{p.nome}</td>
                            <td className="border px-4 py-2">
                                {p.telefones.map(t => t.numero).join(", ")}
                            </td>
                            <td className="border px-4 py-2">{p.idade}</td>
                            <td className="border px-4 py-2">
                            <Link href={`/contato/${p.id}/edit`} className="text-blue-600">Editar</Link>                            </td>
                            <td className="border px-4 py-2">
                                <Link href={`/contato/${p.id}/novo_telefone`} className="text-green-600">Adicionar</Link>
                            </td>
                            <td className="border px-4 py-2">
                                <button onClick={() => handleRemover(p.id)} className="text-red-600">Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}