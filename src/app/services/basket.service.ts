import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { IBasketItem } from "../interfaces/basket-item";


@Injectable({
  providedIn: 'root'
})
export class BasketDataService {
  constructor() {}

  public getBasket(): IBasketItem[] {
    return JSON.parse(<string>localStorage.getItem('basket'));
  }

  public getTotalItems(): number {
    const basket = this.getBasket();
    console.log('basket :', basket);
    let totalQuantity = 0
    for (const item of basket) {
      totalQuantity += item.quantity
    }
    return totalQuantity;
  }

  public removeItem(id: string, size: number): void {
    console.log('remove');
    let basket = this.getBasket();

    const item = this._findExactItem(basket, id, size);

    if (item) {
      item.quantity--
    }

    localStorage.setItem('basket', JSON.stringify(basket));
  }

  public addItem(id: string, size: number): void {
    console.log('add');
    let basket = this.getBasket();

    const item = {
          id,
          size,
          quantity: 1
        }
    if (basket) {
      // check if item already in bag
      const duplicate = this._findExactItem(basket, id, size);

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
    return _.find(basket, (o) => o.id === id && o.size === size);
  }

}
