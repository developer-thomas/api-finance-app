import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  getUserByIdService,
  getUserService,
  updateUserService,
  userLoginService,
} from "../services/users-service";

import { badRequest } from "../utils/status-http";
import { UserModel } from "../models/user-model";

export const getAllUsers = async (req: Request, res: Response) => {
  const httpResponse = await getUserService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getUserById = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const httpResponse = await getUserByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const addUser = async (req: Request, res: Response) => {
  const bodyValues = req.body;
  const httpResponse = await createUserService(bodyValues);

  if (bodyValues) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    const response = await badRequest();
    res.status(response.statusCode).json(response.body);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const httpResponse = await deleteUserService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bodyValues: UserModel = req.body;
  const httpResponse = await updateUserService(id, bodyValues);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const userLogin = async (req: Request, res: Response) => {
  const bodyValues: { cpf: string; password: string } = req.body;
  const httpResponse = await userLoginService(bodyValues.cpf, bodyValues.password);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
