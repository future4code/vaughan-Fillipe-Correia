import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase {
  public createTables = async (): Promise<void> => {
    try {
      await this.connection.raw(`
      CREATE TABLE shopper_products (
          product_id VARCHAR(255) PRIMARY KEY,
          product_name VARCHAR(255),
          product_price FLOAT,
          product_quantity_stock INT
          );

          CREATE TABLE shopper_orders (
          order_id VARCHAR(255) PRIMARY KEY,
          client_name VARCHAR(255),
          delivery_date DATE,
          order_total VARCHAR(255),
          products VARCHAR(255)
          );
      `);

      console.log("Tabelas criadas com sucesso");
      await this.connection.destroy();
    } catch (error: any) {
      console.log(error.sqlMessage || error.message);
      await this.connection.destroy();
    }
  };
}

new Migrations().createTables();
