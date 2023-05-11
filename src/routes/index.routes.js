import { Router } from "express";
import {inserirJogo, inserirCliente, listarJogos, listarClientes, buscarClienteId, atualizarCliente, listarAlugueis, inserirAluguel, finalizarAluguel, apagarAluguel} from "../controllers/controllers.js";


const jogosRouter = Router()

jogosRouter.post("/games", inserirJogo)
jogosRouter.get("/games", listarJogos)
jogosRouter.post("/customers", inserirCliente)
jogosRouter.get("/customers", listarClientes)
jogosRouter.get("/customers/:id", buscarClienteId)
jogosRouter.put("/customers/:id", atualizarCliente)
jogosRouter.get("/rentals", listarAlugueis)
jogosRouter.post("/rentals", inserirAluguel)
jogosRouter.post("/rentals/:id/return", finalizarAluguel)
jogosRouter.delete("/rentals/:id", apagarAluguel)

export default jogosRouter