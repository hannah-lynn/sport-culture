import * as _ from 'lodash';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { IBasketItem } from '../interfaces/basket-item';
import { Injectable, OnDestroy } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class BasketDataService implements OnDestroy {
  public basket = new BehaviorSubject<IBasketItem[]>([]);
  public total = new Subject<number>();

  basketItems = this.basket.asObservable();
  totalItems = this.total.asObservable();
  private _subscription!: Subscription;

  constructor() {}

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public getBasket(): IBasketItem[] {
    return JSON.parse(<string>localStorage.getItem('basket'));
  }

  public getTotalBasketQuantity(): number {
    return JSON.parse(<string>localStorage.getItem('totalQuantity'));
  }

  public setBasket(basket: IBasketItem[]): void {
    localStorage.setItem('basket', JSON.stringify(basket));
    return this.basket.next(basket);
  }

  public setTotalItems(basket: IBasketItem[]): void {
    let totalQuantity = 0;

    for (const item of basket) {
      totalQuantity += item.quantity;
    }
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
    this.total.next(totalQuantity);
  }

  public removeItem(id: string, size: number): void {
    let basket = this.getBasket();

    const item = this._findExactItem(basket, id, size);

    if (item && item.quantity > 1) {
      item.quantity--;
    } else if (item) {
      basket.splice(basket.indexOf(item), 1);
    }

    this.setBasket(basket);
    this.setTotalItems(basket);
  }

  public addItem(product: IProduct, size: number): void {
    let basket = this.getBasket();

    const item = {
      product,
      size,
      quantity: 1,
    };
    if (basket) {
      // check if item already in bag
      const duplicate = this._findExactItem(basket, product.id, size);

      if (duplicate) {
        duplicate.quantity++;
      } else {
        basket = [item, ...basket];
      }
    } else {
      basket = [item];
    }

    this.setBasket(basket);
    this.setTotalItems(basket);
  }

  private _findExactItem(
    basket: IBasketItem[],
    id: string,
    size: number
  ): IBasketItem | undefined {
    return basket.find((o) => o.product.id === id && o.size === size);
  }
}
