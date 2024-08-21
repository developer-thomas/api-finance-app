import { UserModel } from "../../models/user-model";
import { allUsers } from "../../data/all-users";

const users: UserModel[] = allUsers;

export const getAllUsers = async (): Promise<UserModel[]> => {
  return users;
};

export const getUserById = async (id: number): Promise<UserModel | undefined> => {
  const user = users.find((user) => user.id === id);
  return user;
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
