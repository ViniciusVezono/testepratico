'use client';

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { SalvarTelefone } from "./action";

export default function NovoTelefone() {
    const { id } = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [numero, setNumero] = useState("");
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        if (searchParams.get("sucesso") === "1") {
            Swal.fire({
                text: "Contato criado com sucesso! Agora adicione um telefone.",
                icon: "success",
                timer: 3000,
                toast: true,
                position: "top-right",
                showConfirmButton: false,
            });
            router.replace(`/contato/${id}/telefone`);
        }
    }, [searchParams, router, id]);

    const handleSalvar = async (e) => {
        e.preventDefault();
        setBusy(true);

        try {
            const resultado = await SalvarTelefone({ numero, contatoId: id });
            if (resultado && resultado.id) {
                Swal.fire({
                    text: "Telefone salvo com sucesso!",
                    icon: "success",
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false,
                });
                router.push("/contato");
            }
        } catch {
            Swal.fire({
                text: "Erro ao salvar o telefone",
                icon: "error",
                timer: 3000,
                toast: true,
                position: "top-right",
                showConfirmButton: false,
            });
        }

        setBusy(false);
    };

    return (
        <div className="mt-4 ml-4">
            <form onSubmit={handleSalvar} className="flex flex-col gap-4 max-w-md">
                <label>
                    Telefone:
                    <input
                        type="text"
                        name="numero"
                        required
                        className="bg-neutral-50 border px-2 py-1 w-full"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </label>

                <button
                    type="submit"
                    disabled={busy}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-green-300"
                >
                    {busy ? "Salvando..." : "Salvar Telefone"}
                </button>
            </form>
        </div>
    );
}