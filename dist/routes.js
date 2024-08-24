"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const users_controller_1 = require("./controllers/users-controller");
exports.userRoutes = (0, express_1.Router)();
// Cria-se a rota e aponta para qual controller essa rota se aplicará
exports.userRoutes.get("/users", users_controller_1.getAllUsers);
exports.userRoutes.get("/users/:id", users_controller_1.getUserById);
exports.userRoutes.post("/users", users_controller_1.addUser);
exports.userRoutes.delete("/users/:id", users_controller_1.deleteUser);
exports.userRoutes.patch("/users/:id", users_controller_1.updateUser);
exports.userRoutes.post("/login", users_controller_1.userLogin);
