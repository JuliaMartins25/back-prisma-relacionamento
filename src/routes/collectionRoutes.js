import express from "express";
import collectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as coleções
collectionRouter.get("/", collectionController.getAllCollections);

// GET /personagens/:id - Obter um Personagem pelo ID
//collectionRouter.get("/:id", collectionController.get);

// POST /personagens - Criar um novo Personagem
collectionRouter.post("/", collectionController.createCollection);

// PUT /personagens/:id - Atualizar um Personagem
//collectionRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE /personagens/:id - Remover um Personagem
//collectionRouter.delete("/:id", PersonagemController.deletePersonagem);

export default collectionRouter;
