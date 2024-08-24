"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allUsers = void 0;
exports.allUsers = [
    {
        id: 1,
        firstName: "John",
        fullName: "John Doe",
        cpf: "12345678901",
        email: "john@example.com",
        phoneNumber: "1234567890",
        password: "senha123", // Senha do usuário
        balance: 1000,
        depositBalance: 500,
        creditCardLimit: 2000,
        sendTransactions: [],
        receivedTransactions: [],
        creditCardDetails: {
            cardNumber: "1111222233334444",
            cardName: "John Doe",
            expirationDate: "12/25",
        },
    },
    {
        id: 2,
        firstName: "Jane",
        fullName: "Jane Doe",
        cpf: "987.654.321-00",
        email: "jane@mail.com",
        phoneNumber: "+5511888888888",
        password: "123456789",
        balance: 1000,
        depositBalance: 500,
        creditCardLimit: 2000,
        sendTransactions: [],
        receivedTransactions: [],
        creditCardDetails: {
            cardNumber: "1111222233334444",
            cardName: "John Doe",
            expirationDate: "12/25",
        },
    },
];
