import "reflect-metadata";
import express, { response } from "express";
import "./database"; // already pulls index.ts

const app = express();

/**
 * HTTP Methods
 *
 * GET => Busca
 * POST => Salvar uma informacao
 * PUT => Alterar uma informacao
 * DELETE => Deletar
 * PATCH => Alteracao especifica
 */
app.get("/", (request, response) => {
  return response.json({ message: "Hello World - NLW 4" });
});

// 1 param => Rota (recurso API)
// 2 param => request, response
app.post("/", (request, response) => {
  return response.json({ message: "Data was saved with no problems!" });
});

app.listen(3333, () => console.log("Server is running at port 3333"));
