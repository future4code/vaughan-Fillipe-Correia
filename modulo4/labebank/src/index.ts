import express from "express";
import cors from "cors";
import { users, User, UserType } from "./data";

import { AddressInfo } from "net";
import { send } from "process";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

type Transaction = {
  value: number;
  description: string;
  date: string;
};

type Account = {
  name: string;
  cpf: string;
  birthDate: string;
  balance: number;
  transactions: Transaction[];
};

const accounts: Account[] = [];

// Criar conta
app.post("/account", (req, res) => {
  try {
    const { name, cpf, birthDate } = req.body;

    const account: Account = {
      name,
      cpf,
      birthDate,
      balance: 0,
      transactions: [],
    };

    const birthDateParsed = parseInt(birthDate.split("-")[0]);
    const currentYear = new Date().getFullYear();

    if (currentYear - birthDateParsed < 18) {
      throw new Error("User is under 18 years old");
    }

    accounts.push(account);

    return res.status(201).send(account);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

// Pegar saldo
app.get("/account", (req, res) => {
  try {
    const { name, cpf } = req.body;

    const account = accounts.find((account) => account.cpf === cpf);

    if (!account) {
      throw new Error("Account not found");
    }

    return res.status(200).send(account);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

// Adicionar saldo
app.post("/account/deposit", (req, res) => {
  try {
    const { name, cpf, value } = req.body;

    const account = accounts.find((account) => account.cpf === cpf);

    if (!account) {
      throw new Error("Account not found");
    }

    account.balance += value;

    return res.status(200).send(account);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

// Pegar conta
app.get("/accounts", (req, res) => {
  try {
    return res.status(200).send(accounts);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

// Transferência interna
app.post("/account/transfer", (req, res) => {
  try {
    const { name, cpf, recipientName, recipientCpf, value } = req.body;

    const account = accounts.find((account) => account.cpf === cpf);

    if (!account) {
      throw new Error("Account not found");
    }

    const recipientAccount = accounts.find(
      (account) => account.cpf === recipientCpf
    );

    if (!recipientAccount) {
      throw new Error("Recipient account not found");
    }

    if (account.balance < value) {
      throw new Error("Insufficient funds");
    }

    account.balance -= value;
    recipientAccount.balance += value;

    const transaction: Transaction = {
      value,
      description: `Transfer to ${recipientName}`,
      date: new Date().toISOString(),
    };

    account.transactions.push(transaction);
    recipientAccount.transactions.push(transaction);

    return res.status(200).send(account);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});
