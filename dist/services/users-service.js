"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.userLoginService = exports.updateUserService = exports.deleteUserService = exports.createUserService = exports.getUserByIdService = exports.getUserService = void 0;
const userRepository = __importStar(require("../repositories/users/users-repository"));
const HttpResponse = __importStar(require("../utils/status-http"));
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userRepository.getAllUsers();
    let dataResponse = null;
    if (!data) {
        return yield HttpResponse.noContent(data);
    }
    else {
        dataResponse = yield HttpResponse.statusOk(data);
    }
    return dataResponse;
});
exports.getUserService = getUserService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const idParam = parseInt(id);
    const data = yield userRepository.getUserById(idParam);
    if (!data) {
        return HttpResponse.noContent(data);
    }
    else {
        return HttpResponse.statusOk(data);
    }
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let response = null;
    if (Object.keys(user).length !== 0) {
        yield userRepository.addUser(user);
        response = HttpResponse.created();
    }
    else {
        response = HttpResponse.badRequest({ message: "Falha ao criar usuário!" });
    }
    return response;
});
exports.createUserService = createUserService;
const deleteUserService = (idParam) => __awaiter(void 0, void 0, void 0, function* () {
    let response = null;
    const isDeleted = yield userRepository.deleteUser(idParam);
    if (isDeleted) {
        response = HttpResponse.statusOk({ message: "User Deleted!" });
    }
    else {
        response = HttpResponse.badRequest({ message: "Bad Request" });
    }
    return response;
});
exports.deleteUserService = deleteUserService;
const updateUserService = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userRepository.updateUser(id, user);
    let response = null;
    // O erro "no overload matches this call" relacionado ao Object.keys() geralmente ocorre quando o
    // argumento passado para Object.keys() não está sendo reconhecido corretamente como um objeto.
    // Isso pode acontecer se o argumento for null, undefined, uma string, um número ou outro tipo que não seja
    // um objeto.
    // Nessa versão, antes de verificar o comprimento das chaves de data, verificamos se data é null ou
    // undefined. Se for o caso, consideramos que não há dados e tratamos como uma solicitação (bad request).
    if (!data || Object.keys(data).length === 0) {
        response = yield HttpResponse.badRequest();
    }
    else {
        response = yield HttpResponse.statusOk(data);
    }
    return response;
});
exports.updateUserService = updateUserService;
const userLoginService = (cpf, password) => __awaiter(void 0, void 0, void 0, function* () {
    const userReq = yield userRepository.userLogin(cpf, password);
    let response = null;
    if (userReq) {
        response = HttpResponse.statusOk({ message: "Usuário logado com sucesso", userReq });
    }
    else {
        response = HttpResponse.badRequest({ message: "CPF ou senha incorretos." });
    }
    return response;
});
exports.userLoginService = userLoginService;
