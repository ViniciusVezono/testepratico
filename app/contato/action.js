"use server";

import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();
import fs from "fs/promises";
import path from "path";


export async function Salvar(dados) {
  const retorno = await prisma.contato.create({
    data: {
      nome: dados.nome,
      idade: parseInt(dados.idade),
    },
  });

  return retorno;
}

export async function Listar() {
  const contatos = await prisma.contato.findMany({
    include: {
      telefones: true,
    },
  });

  return contatos;
}


export async function Obter(id) {
  const resultado = await prisma.contato.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      telefones: true,
    },
  });

  return resultado;
}


export async function Atualizar(contato) {
  const resultado = await prisma.contato.update({
    where: {
      id: parseInt(contato.id),
    },
    data: {
      nome: contato.nome,
      idade: parseInt(contato.idade),
    },
  });

  return resultado;
}

export async function Remover(id) {
  try {
    await prisma.telefone.deleteMany({
      where: {
        contatoId: parseInt(id),
      },
    });

    const resultado = await prisma.contato.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (resultado) {
      const logMessage = `Contato removido em ${new Date().toISOString()}: ID=${
        resultado.id
      }, Nome=${resultado.nome}, Idade=${resultado.idade}\n`;
      const logDir = path.join(process.cwd(), "logs");
      try {
        await fs.mkdir(logDir, { recursive: true });
        await fs.appendFile(path.join(logDir, "log_remoção.txt"), logMessage);
      } catch (fileError) {
        console.error("Erro ao criar diretório ou escrever no arquivo de log:", fileError);
      }
    }

    return resultado;
  } catch (error) {
    console.error("Erro ao remover contato:", error);
    return null;
  }
}

export async function PesquisarPorNome({ nome }) {
  const resultado = await prisma.contato.findMany({
    where: {
      nome: {
        contains: nome,
      },
    },
    include: {
      telefones: true,
    },
  });

  return resultado;
}