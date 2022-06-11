import { Request, Response } from "express";
import ProductBusiness from "../business/ProductBusiness";
import { SendOrderInputDTO } from "../types/sendOrderInputDTO";


export default class ProductsController {
  constructor(private productBusiness: ProductBusiness) {}

  sendOrder = async (req: Request, res: Response) => {
    const { client_name, delivery_date, order_total, products } = req.body;

    const input: SendOrderInputDTO = {
      client_name,
      delivery_date,
      order_total,
      products,
    };
    try {
      const order = await this.productBusiness.sendOrder(input);
      res
        .status(201)
        .send({ message: "Pedido enviado com sucesso", order });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro ao enviar pedido");
    }
  };

  getOrderById = async (req: Request, res: Response) => {

    const { id } = req.params;

    if (!id) {
      return res.status(400).send("Id inválido");
    }

    try {
      const order = await this.productBusiness.getOrderById(id);
      res.status(200).send(order);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro ao buscar pedido");
    }
};

  getAllOrders = async (req: Request, res: Response) => {
    try {
      const orders = await this.productBusiness.getAllOrders();
      res.status(200).send(orders);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro ao buscar pedidos");
    }
  };
  
}
