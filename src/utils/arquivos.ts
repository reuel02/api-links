import fs from "fs/promises";
import Link from "../models/Link";

const bancodedados = "src/bancodedados.json";

export const lerDados = async (): Promise<Link[]> => {
  const dados = await fs.readFile(bancodedados);
  const parse = JSON.parse(dados.toString());
  return parse;
};

export const adicionarDados = async (link: Link) => {
  const dados = await lerDados();
  dados.push(link);

  await fs.writeFile(bancodedados, JSON.stringify(dados, null, "\t"));
};

export const contarVisitas = async (identificador: string) => {
    const dados = await lerDados();

    const link = dados.find(link => {
        return link.identificador === identificador
    })

    link!.visitas += 1
  
    await fs.writeFile(bancodedados, JSON.stringify(dados, null, "\t"));
  };
