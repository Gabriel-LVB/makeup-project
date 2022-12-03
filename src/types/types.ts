import CartItem from "./cartItem";

export type OnListItemClickType = (name: string, title: string) => void;
export type CartItemFunction = (item: CartItem) => void;
