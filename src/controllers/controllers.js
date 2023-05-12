import { db } from "../database/database.config.js";
// importar algo do ID?
import {
  jogosSchema,
  clientesSchema,
  alugueisSchema,
} from "../schemas/schemas.js";

export async function inserirJogo(req, res) {
  const { name, image, pricePerDay, stockTotal } = req.body;

  const validation = jogosSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((d) => d.message);
    return res.status(400).send(errors);
  }

  try {
    const jogoExiste = (
      await db.query("SELECT * FROM games WHERE name = $1", [name])
    ).rows;
    if (jogoExiste.length !== 0) return res.sendStatus(409);

    await db.query(
      `INSERT INTO games (name, image, "pricePerDay", "stockTotal") VALUES ($1, $2, $3, $4)`,
      [name, image, pricePerDay, stockTotal]
    );
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
  const { name, phone, cpf, birthday } = req.body;

  const validation = clientesSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((d) => d.message);
    return res.status(400).send(errors);
  }

  try {
    const cpfExiste = (
      await db.query("SELECT * FROM customers WHERE cpf = $1", [cpf])
    ).rows;
    if (cpfExiste.length !== 0) return res.sendStatus(409);

    await db.query(
      `INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)`,
      [name, phone, cpf, birthday]
    );
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function listarClientes(req, res) {
  try {
    const clientes = await db.query("SELECT * FROM customers");
    const response = clientes.rows;
  
    const birthday = new Date(response.birthday);
    // Formatting date
    let day = birthday.getUTCDate();
    day = day.toString().length == 1 ? '0' + day : day;
    let month = birthday.getUTCMonth() + 1;
    month = month.toString().length == 1 ? '0' + month : month;
    const year = birthday.getUTCFullYear();

    // Replace original date for formatted date
    response.birthday = `${year}-${month}-${day}`
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function buscarClienteId(req, res) {
    const { id } = req.params;
    try {
      const clientes = await db.query("SELECT * FROM customers WHERE id = $1", [id]);
      if (!clientes) return res.sendStatus(404);
      const response = clientes.rows[0];
  
      const birthday = new Date(response.birthday);
      // Formatting date
      let day = birthday.getUTCDate();
      day = day.toString().length == 1 ? '0' + day : day;
      let month = birthday.getUTCMonth() + 1;
      month = month.toString().length == 1 ? '0' + month : month;
      const year = birthday.getUTCFullYear();
  
      // Replace original date for formatted date
      response.birthday = `${year}-${month}-${day}`
      res.send(response);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

export async function atualizarCliente(req, res) {
  const { name, phone, cpf, birthday } = req.body;
  const { id } = req.params;

  const validation = clientesSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((d) => d.message);
    return res.status(400).send(errors);
  }

  try {
    const cpfExiste = (
      await db.query("SELECT * FROM customers WHERE cpf = $1", [cpf])
    ).rows;
    if (cpfExiste.length !== 0) return res.sendStatus(409);

    await db.query(
      `UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4 WHERE id=$5)`,
      [name, phone, cpf, birthday, id]
    );
    res.sendStatus(200);
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
