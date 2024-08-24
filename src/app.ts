// A responsabilidade do app é apenas ler as configurações do projeto
import express, { json } from "express";
import { userRoutes } from "./routes";
import cors, { CorsOptions } from "cors";

export function createApp() {
  const app = express();
  // middleware para poder ler JSON no corpo das requisições
  app.use(json());

  // Esse é o prefixo padrão, as rotas contidas no router. Ex: /api/users
  const corsOptions: CorsOptions = {
    origin: "http://localhost:8100",
    methods: "GET, POST, PATCH, PUT, DELETE",
  };

  app.use(cors(corsOptions));

  app.use("/api", userRoutes);
  return app;
}
