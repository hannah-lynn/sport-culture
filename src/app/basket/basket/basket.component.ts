import * as _ from 'lodash';
import { Component, HostListener, OnInit } from '@angular/core';
import { BasketDataService } from 'src/app/services/basket.service';
import { IBasketItem } from 'src/app/interfaces/basket-item';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const w = event.target as Window;
    this.innerWidth = w.innerWidth;
  }

  public product!: IProduct;
  public cost: number = 0;
  public items: IBasketItem[] = [];
  public innerWidth: number = 0;


  constructor(private _basketService: BasketDataService) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this._getBasketItems();
  }

  public add(item: IBasketItem): void {
    this._basketService.addItem(item.product, item.size);
    this._getBasketItems();
  }

  public remove(item: IBasketItem): void {
    this._basketService.removeItem(item.product.id, item.size);
    this._getBasketItems();
  }

  public getTotal(): number {
    return _.sumBy(this.items, (o) => (Number(o.product.price.amount) * o.quantity))
  }

  private _getBasketItems(): void {
    this.items = this._basketService.getBasket();
  }

}
