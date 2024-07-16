import { CartItemType } from "./CartItemType";

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  discount_percent: number;
  discount_threshold: number;
  quantity?: number;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
};
