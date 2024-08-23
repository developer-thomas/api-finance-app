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
exports.userLogin = exports.updateUser = exports.deleteUser = exports.addUser = exports.getUserById = exports.getAllUsers = void 0;
const users_service_1 = require("../services/users-service");
const status_http_1 = require("../utils/status-http");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const httpResponse = yield (0, users_service_1.getUserService)();
    res.status(httpResponse.statusCode).json(httpResponse.body);
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const httpResponse = yield (0, users_service_1.getUserByIdService)(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
});
exports.getUserById = getUserById;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bodyValues = req.body;
    const httpResponse = yield (0, users_service_1.createUserService)(bodyValues);
    if (bodyValues) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
    else {
        const response = yield (0, status_http_1.badRequest)();
        res.status(response.statusCode).json(response.body);
    }
});
exports.addUser = addUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const httpResponse = yield (0, users_service_1.deleteUserService)(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const bodyValues = req.body;
    const httpResponse = yield (0, users_service_1.updateUserService)(id, bodyValues);
    res.status(httpResponse.statusCode).json(httpResponse.body);
});
exports.updateUser = updateUser;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bodyValues = req.body;
    const httpResponse = yield (0, users_service_1.userLoginService)(bodyValues.user, bodyValues.password);
    res.status(httpResponse.statusCode).json(httpResponse.body);
});
exports.userLogin = userLogin;
