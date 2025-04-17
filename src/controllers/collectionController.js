import collectionModel from "../models/collectionModel.js";

class CollectionController {
  // GET /colecoes
  async getAllCollections(req, res) {
    try {
      const colecoes = await collectionModel.findAll();
      res.json(colecoes);
    } catch (error) {
      console.error("Erro ao buscar as coleções:", error);
      res.status(500).json({ error: "Erro ao buscar as coleções" });
    }
  }

  // GET /colecoes/:id
  async getPersonagemById(req, res) {
    try {
      const { id } = req.params;

      const personagem = await PersonagemModel.findById(id);

      if (!personagem) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.json(personagem);
    } catch (error) {
      console.error("Erro ao buscar personagem:", error);
      res.status(500).json({ error: "Erro ao buscar personagem" });
    }
  }

  // POST /api/colecoes
  async createCollection(req, res) {
    try {
      // Validação básica
      const {
        name,
        description,
        releaseYear,
      } = req.body;

      // Verifica se todos os campos das coleções foram fornecidos
      if (!name ||!releaseYear) {
        return res
          .status(400)
          .json({ error: "Os campos nome e ano são obrigatórios" });
      }

      // Criar o novo personagem
      const newCollection = await collectionModel.create(
        name,
        description,
        releaseYear,

      );

      if (!newCollection) {
        return res.status(400).json({ error: "Erro ao criar Coleção" });
      }

      res.status(201).json(newCollection);
    } catch (error) {
      console.error("Erro ao criar coleção:", error);
      res.status(500).json({ error: "Erro ao criar coleção" });
    }
  }

  // PUT /api/personagens/:id
  async updatePersonagem(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        description,
        episodes,
        releaseYear,
        studio,
        genres,
        rating,
        imageUrl,
      } = req.body;

      // Atualizar o personagem
      const updatedPersonagem = await PersonagemModel.update(
        id,
        title,
        description,
        episodes,
        releaseYear,
        studio,
        genres,
        rating,
        imageUrl
      );

      if (!updatedPersonagem) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.json(updatedPersonagem);
    } catch (error) {
      console.error("Erro ao atualizar personagem:", error);
      res.status(500).json({ error: "Erro ao atualizar personagem" });
    }
  }

  // DELETE /api/personagens/:id
  async deletePersonagem(req, res) {
    try {
      const { id } = req.params;

      // Remover o personagem
      const result = await PersonagemModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover personagem:", error);
      res.status(500).json({ error: "Erro ao remover personagem" });
    }
  }
}

export default new CollectionController();
