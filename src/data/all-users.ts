import { CreditCardDetails, Transaction, UserBalance, UserModel } from "../models/user-model";

export const allUsers: UserModel[] = [
  {
    id: 1,
    firstName: "John",
    fullName: "John Doe",
    cpf: "12345678901",
    password: "senha123", // A senha deve ser armazenada como hash
    email: "john@example.com",
    phoneNumber: "1234567890",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
  {
    id: 2,
    firstName: "Jane",
    fullName: "Jane Doe",
    cpf: "98765432100",
    password: "senha123",
    email: "jane@example.com",
    phoneNumber: "0987654321",
    createdAt: new Date("2023-02-01"),
    updatedAt: new Date("2023-02-01"),
  },
];

export const userBalances: UserBalance[] = [
  {
    userId: 1,
    balance: 1000,
    depositBalance: 500,
    creditCardLimit: 2000,
  },
  {
    userId: 2,
    balance: 1500,
    depositBalance: 300,
    creditCardLimit: 2500,
  },
];

export const creditCardDetails: CreditCardDetails[] = [
  {
    userId: 1,
    cardNumber: "1111222233334444",
    cardName: "John Doe",
    expirationDate: "12/25",
  },
  {
    userId: 2,
    cardNumber: "5555666677778888",
    cardName: "Jane Doe",
    expirationDate: "11/24",
  },
];

export const transactions: Transaction[] = [
  {
    userId: 1,
    senderId: 1,
    receiverId: 2,
    amount: 100,
    transactionDate: new Date("2023-03-01"),
  },
  {
    userId: 2,
    senderId: 2,
    receiverId: 1,
    amount: 200,
    transactionDate: new Date("2023-03-05"),
  },
];
