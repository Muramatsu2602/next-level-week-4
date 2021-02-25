import "reflect-metadata";
import express, { response } from "express";
import { router } from "./routes";
import "./database"; // already pulls index.ts

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running at port 3333"));
