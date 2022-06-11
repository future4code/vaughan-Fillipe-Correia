import express from "express";

import ProductController from "../controller/ProductController";
import ProductBusiness from "../business/ProductBusiness";
import ProductData from "../data/ProductData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export const productRouter = express.Router();

const productController = new ProductController(
    new ProductBusiness(
        new ProductData(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    ),
);

    productRouter.post("/sendOrder", productController.sendOrder);
    productRouter.get("/getorder/:id", productController.getOrderById);
    productRouter.get("/getAllOrders", productController.getAllOrders);