export interface UserModel {
  id: number;
  firstName: string;
  fullName: string;
  cpf: string;
  email: string;
  phoneNumber: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserBalance {
  userId: number;
  balance: number;
  depositBalance: number;
  creditCardLimit: number;
}

export interface CreditCardDetails {
  userId: number;
  cardNumber: string;
  cardName: string;
  expirationDate: string;
}

export interface Transaction {
  userId: number;
  senderId: number;
  receiverId: number;
  amount: number;
  transactionDate: Date;
}
