import { Request, Response } from "express";
import { adicionarDados, lerDados } from "../utils/arquivos";
import Link from "../models/Link";

export default class CadastroLinkControlador {
    async controlador(req: Request, res: Response){
        const { identificador, url } = req.body

        if (!identificador || !url) {
            res.status(400).json({ mensagem: 'O identificador e a URL são obrigatórios '})
            return
        }

        const bancodedados = await lerDados()

        const existeLinkIgual = bancodedados.find(link => {
            return link.identificador === identificador
        })

        if (existeLinkIgual) {
            res.status(400).json({ mensagem: 'Link ja existe.'})
            return
        }

        const novoLink = new Link(identificador, url)

        await adicionarDados(novoLink)

        res.status(201).json(novoLink)
    }
}