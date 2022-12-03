import { ProductColors } from "./item";

interface CartItemTypes {
  name: string;
  brand: null | string;
  img: string;
  product_colors: ProductColors[];
  selected_color: ProductColors | null;
  price: string;
  quantity: number;
}

export default CartItemTypes;
