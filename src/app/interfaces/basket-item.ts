import { IProduct } from "./product";

export interface IBasketItem {
  product: IProduct,
  size: number,
  quantity: number
}
