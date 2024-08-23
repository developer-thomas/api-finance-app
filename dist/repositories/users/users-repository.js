"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.deleteUser = exports.updateUser = exports.addUser = exports.getUserById = exports.getAllUsers = void 0;
const all_users_1 = require("../../data/all-users");
const users = all_users_1.allUsers;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getAllUsers = getAllUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = users.find((user) => user.id === id);
    return user;
});
exports.getUserById = getUserById;
const addUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    users.push(newUser);
});
exports.addUser = addUser;
const updateUser = (id, updatedUser) => __awaiter(void 0, void 0, void 0, function* () {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = Object.assign(Object.assign({}, users[userIndex]), updatedUser);
        return users[userIndex];
    }
    return null;
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userIndex = users.findIndex((player) => player.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1)[0];
        return true;
    }
    return false;
});
exports.deleteUser = deleteUser;
const userLogin = (cpf, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = users.find((user) => user.cpf === cpf && user.password === password);
    if (user) {
        return user;
    }
    else {
        return null;
    }
});
exports.userLogin = userLogin;
