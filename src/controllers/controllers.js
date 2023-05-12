import { db } from "../database/database.config.js";
// importar algo do ID?
import { jogosSchema, clientesSchema, alugueisSchema } from "../schemas/schemas.js";

export async function inserirJogo(req, res) {
    const { name, image, pricePerDay, stockTotal } = req.body;

  const validation = jogosSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((d) => d.message);
    return res.status(400).send(errors);
  }

    try {
        const jogoExiste = (await db.query('SELECT * FROM games WHERE name = $1', [name])).rows;
        if(jogoExiste.length !==0) return res.sendStatus(409);
        
      await db.query(`INSERT INTO games ("name", "image", "pricePerDay", "stockTotal") VALUES ($1, $2, $3, $4), [name, image, pricePerDay, stockTotal];`);
      res.sendStatus(201);

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
