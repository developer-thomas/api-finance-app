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
exports.created = exports.noContent = exports.badRequest = exports.statusOk = void 0;
const statusOk = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 200,
        body: data,
    };
});
exports.statusOk = statusOk;
const badRequest = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 400,
        body: data,
    };
});
exports.badRequest = badRequest;
const noContent = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 204,
        body: data,
    };
});
exports.noContent = noContent;
const created = () => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 201,
        body: { message: "Usuário criado com sucesso!" },
    };
});
exports.created = created;
