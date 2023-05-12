import { db } from "../database/database.config";
// importar algo do ID?
import { jogosSchema, clientesSchema, alugueisSchema } from "../schemas/schemas.js";

export async function inserirJogo(req, res) {
    const { name, image, pricePerDay, stockTotal } = req.body;
    try {
    //   const jogos = await db.query("INSERT INTO games (name, image, pricePerDay, stockTotal) VALUES (25, 'fulano@hotmail.com', '123456');");
    //   res.send(receitas.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  export async function listarJogos(req, res) {
    try {
      const jogos = await db.query("SELECT * FROM games");
      res.send(jogos.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  export async function inserirCliente(req, res) {
    try {
    //   const receitas = await db.query("SELECT * FROM receitas");
    //   res.send(receitas.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  export async function listarClientes(req, res) {
    try {
    //   const receitas = await db.query("SELECT * FROM receitas");
    //   res.send(receitas.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  export async function buscarClienteId(req, res) {
    try {
    //   const receitas = await db.query("SELECT * FROM receitas");
    //   res.send(receitas.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  export async function atualizarCliente(req, res) {
    try {
    //   const receitas = await db.query("SELECT * FROM receitas");
    //   res.send(receitas.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  export async function listarAlugueis(req, res) {
    try {
    //   const receitas = await db.query("SELECT * FROM receitas");
    //   res.send(receitas.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  export async function inserirAluguel(req, res) {
    try {
    //   const receitas = await db.query("SELECT * FROM receitas");
    //   res.send(receitas.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  export async function finalizarAluguel(req, res) {
    try {
    //   const receitas = await db.query("SELECT * FROM receitas");
    //   res.send(receitas.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  export async function apagarAluguel(req, res) {
    try {
    //   const receitas = await db.query("SELECT * FROM receitas");
    //   res.send(receitas.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
