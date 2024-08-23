import { UserModel } from "../../models/user-model";
import { allUsers, creditCardDetails, transactions, userBalances } from "../../data/all-users";

const SECRET = process.env.JWT_SECRET;

const users: UserModel[] = allUsers;

export const getUserAccountInfoById = async (id: number): Promise<any> => {
  const balances = userBalances.find((user) => user.userId === id);
  const creditCards = creditCardDetails.find((user) => user.userId === id);
  const userTransactions = transactions.find((user) => user.userId === id);
  const allInfos = { ...balances, ...creditCards, ...userTransactions };
  return allInfos;
};

export const addUser = async (newUser: UserModel) => {
  users.push(newUser);
};

export const updateUser = async (id: number, updatedUser: UserModel): Promise<UserModel | null> => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    return users[userIndex];
  }

  return null;
};

export const deleteUser = async (id: number) => {
  const userIndex = users.findIndex((player) => player.id === id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1)[0];
    return true;
  }
  return false;
};

export const userLogin = async (cpf: string, password: string) => {
  const user = users.find((user) => user.cpf === cpf && user.password === password);
  return user;
};
