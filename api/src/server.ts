import express, { response } from "express";

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
  return response.json({ message: "os dados foram salvos com sucesso" });
});

app.listen(3333, () => console.log("Server is running at port 3333"));
