export type Category = "Tecnología" | "Accesorios" | "Oficina";

export interface Product {
    id: number;
    name: string;
    category: Category;
    price: number;
    stock: number;
}