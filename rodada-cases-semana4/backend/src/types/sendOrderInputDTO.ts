export type SendOrderInputDTO = {
    client_name: string,
    delivery_date: string,
    order_total: number,
    products: Array<{
        id: string,
        product_name: string,
        quantity: number,
        price: number,
    }>,
}