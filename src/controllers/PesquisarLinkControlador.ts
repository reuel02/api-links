import { Request, Response } from "express";
import { adicionarDados, contarVisitas, lerDados } from "../utils/arquivos";
import Link from "../models/Link";

export default class PesquisarLinkControlador {
  async controlador(req: Request, res: Response) {
    const { identificador } = req.params;

    const bancodedados = await lerDados();

    const linkEncontrado = bancodedados.find((link) => {
      return link.identificador === identificador;
    });

    if (!linkEncontrado) {
      res.status(404).json({ mensagem: "Link não encontrado." });
      return;
    }

    await contarVisitas(linkEncontrado.identificador);

    res.json({
      url: linkEncontrado.url,
    });
    return;
  }
}
