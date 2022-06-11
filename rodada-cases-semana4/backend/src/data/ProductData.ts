import Order from "../model/Order";
import { BaseDatabase } from "./BaseDatabase";


export default class ProductData extends BaseDatabase {
  protected PRODUCT_TABLE_NAME = "shopper_products";
  protected ORDER_TABLE_NAME = "shopper_orders";

  insertOrder(order: Order): Promise<void> {
    try{
      const result = this.connection.raw(`
        INSERT INTO ${this.ORDER_TABLE_NAME} (
          order_id,
          client_name,
          delivery_date,
          order_total,
          products
        ) VALUES (?, ?, ?, ?, ?)
      `, [
        order.getId(),
        order.getClientName(),
        order.getDeliveryDate(),
        order.getOrderTotal(),
        JSON.stringify(order.getProducts())
      ]);
      return result;
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }

};

  getOrderById = async (id: string): Promise<Order> => {
    try{
      const queryResult: any = await this.connection(this.ORDER_TABLE_NAME)
      .select()
      .where({ order_id: id });

     const order = new Order(
        queryResult[0].order_id,
        queryResult[0].client_name,
        queryResult[0].delivery_date,
        queryResult[0].order_total,
        JSON.parse(queryResult[0].products)
      );

      return order;

    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
};

  getAllOrders() {
    try{
      const result = this.connection.raw(`
        SELECT * FROM ${this.ORDER_TABLE_NAME}
      `);
      return result;
  
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
};

}
