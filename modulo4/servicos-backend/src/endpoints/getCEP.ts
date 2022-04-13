import { Request, Response } from "express";
import app from "../app";
import { connection } from "../data/connection";
import axios from "axios";

// Exercício 1: Escreva uma função que receba um CEP, faça uma requisição para a url [https://viacep.com.br/ws/:cep/json/](https://viacep.com.br/ws/05424150/json/)  e retorne um objeto contendo:

// - Logradouro
// - Bairro
// - Cidade
// - Estado

export function getCEP(req: Request, res: Response): void {
  try {
    const { cep } = req.params;

    if (!cep) {
      res.statusCode = 422;
      throw "CEP é obrigatório";
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    axios.get(url).then((response) => {
        const { logradouro, bairro, localidade, uf } = response.data;

        res.send({
            logradouro,
            bairro,
            localidade,
            uf
        });
    });
    } catch (error:any) {
        if (typeof error === "string") {
            res.send(error);
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/");
        }
        }
    }