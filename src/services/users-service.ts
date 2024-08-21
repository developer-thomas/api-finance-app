import { UserModel } from "../models/user-model";
import * as userRepository from "../repositories/users/users-repository";
import * as HttpResponse from "../utils/status-http";

export const getUserService = async () => {
  const data = await userRepository.getAllUsers();
  let dataResponse = null;

  if (!data) {
    return await HttpResponse.noContent(data);
  } else {
    dataResponse = await HttpResponse.statusOk(data);
  }
  return dataResponse;
};

export const getUserByIdService = async (id: string) => {
  const idParam = parseInt(id);
  const data = await userRepository.getUserById(idParam);

  if (!data) {
    return HttpResponse.noContent(data);
  } else {
    return HttpResponse.statusOk(data);
  }
};

export const createUserService = async (user: UserModel) => {
  let response = null;

  if (Object.keys(user).length !== 0) {
    await userRepository.addUser(user);
    response = HttpResponse.created();
  } else {
    response = HttpResponse.badRequest({ message: "Falha ao criar usuário!" });
  }

  return response;
};

export const deleteUserService = async (idParam: number) => {
  let response = null;
  const isDeleted = await userRepository.deleteUser(idParam);

  if (isDeleted) {
    response = HttpResponse.statusOk({ message: "User Deleted!" });
  } else {
    response = HttpResponse.badRequest({ message: "Bad Request" });
  }
  return response;
};

export const updateUserService = async (id: number, user: UserModel) => {
  const data = await userRepository.updateUser(id, user);
  let response = null;
  // O erro "no overload matches this call" relacionado ao Object.keys() geralmente ocorre quando o
  // argumento passado para Object.keys() não está sendo reconhecido corretamente como um objeto.
  // Isso pode acontecer se o argumento for null, undefined, uma string, um número ou outro tipo que não seja
  // um objeto.

  // Nessa versão, antes de verificar o comprimento das chaves de data, verificamos se data é null ou
  // undefined. Se for o caso, consideramos que não há dados e tratamos como uma solicitação (bad request).
  if (!data || Object.keys(data).length === 0) {
    response = await HttpResponse.badRequest();
  } else {
    response = await HttpResponse.statusOk(data);
  }
  return response;
};
