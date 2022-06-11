export default class Order {
    constructor(
        private id: string,
        private client_name: string,
        private delivery_date: Date,
        private order_total: number,
        private products: Array<{
            id: string,
            product_name: string,
            quantity: number,
            price: number,
        }>,
    ) {}

    public getId(): string {
        return this.id;
    }

    public getClientName(): string {
        return this.client_name;
    }

    public getDeliveryDate(): Date {
        return this.delivery_date;
    }

    public getOrderTotal(): number {
        return this.order_total;
    }

    public getProducts(): Array<{
        id: string,
        product_name: string,
        quantity: number,
        price: number,
    }> {
        return this.products;
    }
}