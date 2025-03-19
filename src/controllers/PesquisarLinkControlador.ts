import { Request, Response } from "express";
import { adicionarDados, lerDados } from "../utils/arquivos";
import Link from "../models/Link";

export default class PesquisarLinkControlador {
    async controlador(req: Request, res: Response){
        const { identificador } = req.params

        if (!identificador) {
            res.status(400).json({mensagem: 'O identificador deve ser informado.'})
            return
        }

        const bancodedados = await lerDados()

        const linkEncontrado = bancodedados.find(link => {
            return link.identificador === identificador
        })

        if (!linkEncontrado) {
            res.status(404).json({mensagem: 'Link não encontrado.'})
            return
        }

        res.json(linkEncontrado)
        return
    }
}