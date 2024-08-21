// A responsabilidade do app é apenas ler as configurações do projeto
import express, { json } from "express";
import { userRoutes } from "./routes";
import cors from "cors";

export function createApp() {
  const app = express();
  // middleware para poder ler JSON no corpo das requisições
  app.use(json());

  // Esse é o prefixo padrão, as rotas contidas no router. Ex: /api/users
  app.use("/api", userRoutes);

  // const corsOptions = {
  //   origin: ["http://usina-rr.netlify.app"],
  //   methoods: ["GET", "POST", "PATCH"],
  // };

  app.use(cors());
  return app;
}
