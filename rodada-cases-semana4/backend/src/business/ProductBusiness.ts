import ProductData from "../data/ProductData";
import Order from "../model/Order";
import { SendOrderInputDTO } from "../types/sendOrderInputDTO";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export default class ProductBusiness {
  constructor(
    private productData: ProductData,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public async sendOrder(input: SendOrderInputDTO): Promise<void> {
    if(!input.client_name || !input.delivery_date || !input.order_total || !input.products){
      throw new Error("Dados inválidos");
    }

    const id = this.idGenerator.generateId();

    const formatedDate = input.delivery_date.split("-");
    const deliveryDate = new Date(
      Number(formatedDate[0]),
      Number(formatedDate[1]) - 1,
      Number(formatedDate[2])
    );

    
    const order = new Order(
      id,
      input.client_name,
      deliveryDate,
      input.order_total,
      input.products
    );

    await this.productData.insertOrder(order);

    return;
  }

  public async getOrderById(id: string) {
    if(!id){
      throw new Error("Id inválido");
    }

    const order = await this.productData.getOrderById(id);

    return order;

};

  public async getAllOrders() {
    const orders = await this.productData.getAllOrders();

    return orders;
  }

}
