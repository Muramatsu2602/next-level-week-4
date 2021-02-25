import "reflect-metadata";
import express, { response } from "express";
import "./database"; // already pulls index.ts

const app = express();

app.listen(3333, () => console.log("Server is running at port 3333"));
