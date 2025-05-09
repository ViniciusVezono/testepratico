'use server';

import { PrismaClient } from "@/app/generated/prisma";
const prisma = new PrismaClient();

export async function SalvarTelefone({ numero, contatoId }) {
    try {
        const telefone = await prisma.telefone.create({
            data: {
                numero,
                contatoId: parseInt(contatoId),
            },
        });
        return telefone;
    } catch (error) {
        console.error("Erro ao salvar telefone:", error);
        return null;
    }
}