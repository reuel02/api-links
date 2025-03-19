import { Request, Response, Router } from "express";
import CadastroLinkControlador from "./controllers/CadastroLinkControlador";
import PesquisarLinkControlador from "./controllers/PesquisarLinkControlador";

const router = Router();

router.post("/", new CadastroLinkControlador().controlador);
router.get("/:identificador", new PesquisarLinkControlador().controlador);

export default router;
