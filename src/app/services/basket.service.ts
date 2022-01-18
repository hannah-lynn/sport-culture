import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { IBasketItem } from "../interfaces/basket-item";
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class BasketDataService {

  public basket = new BehaviorSubject([]);

  constructor() {}


  public getBasket(): IBasketItem[] {
    return JSON.parse(<string>localStorage.getItem('basket'));
  }

  public getTotalItems(): number {
    const basket = this.getBasket();
    let totalQuantity = 0
    for (const item of basket) {
      totalQuantity += item.quantity
    }
    return totalQuantity;
  }

  public removeItem(id: string, size: number): void {
    let basket = this.getBasket();

    const item = this._findExactItem(basket, id, size);

    if (item && item.quantity > 1) {
      item.quantity--
    } else if (item) {
      basket.splice(basket.indexOf(item), 1)
    }

    localStorage.setItem('basket', JSON.stringify(basket));
  }

  public addItem(product: IProduct, size: number): void {
    let basket = this.getBasket();

    const item = {
          product,
          size,
          quantity: 1
        }
    if (basket) {
      // check if item already in bag
      const duplicate = this._findExactItem(basket, product.id, size);

      if (duplicate) {
        duplicate.quantity++
      } else {
        basket = [item, ...basket];
      }
    } else {
      basket = [item]
    }

    localStorage.setItem('basket', JSON.stringify(basket));
  }

  private _findExactItem(basket: IBasketItem[], id: string, size: number): IBasketItem | undefined {
    return _.find(basket, (o) => o.product.id === id && o.size === size);
  }

}
