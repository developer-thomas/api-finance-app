import { Router } from "express";
import { getAllUsers, addUser, deleteUser, updateUser, getUserById } from "./controllers/users-controller";

export const userRoutes = Router();

// Cria-se a rota e aponta para qual controller essa rota se aplicará
userRoutes.get("/users", getAllUsers);
userRoutes.get("/users/:id", getUserById);
userRoutes.post("/users", addUser);
userRoutes.delete("/users/:id", deleteUser);
userRoutes.patch("/users/:id", updateUser);
