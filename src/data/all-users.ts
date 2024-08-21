import { UserModel } from "../../models/user-model";

export const allUsers: UserModel[] = [
  {
    id: 1,
    firstName: "John",
    fullName: "John Doe",
    cpf: "123.456.789-00",
    email: "john@mail.com",
    phone: "+5511999999999",
  },
  {
    id: 2,
    firstName: "Jane",
    fullName: "Jane Doe",
    cpf: "987.654.321-00",
    email: "jane@mail.com",
    phone: "+5511888888888",
  },
];
