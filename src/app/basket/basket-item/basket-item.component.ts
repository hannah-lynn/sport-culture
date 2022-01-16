import * as _ from 'lodash';
import { Component, Input, OnInit } from '@angular/core';
import { IBasketItem } from 'src/app/interfaces/basket-item';
import { IProduct } from 'src/app/interfaces/products';
import { ShopDataService } from 'src/app/services/shop.service';
import { BasketDataService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {
  @Input() item!: IBasketItem;

  public product!: IProduct;
  public cost: number = 0;

  constructor(private _service: ShopDataService, private _basketService: BasketDataService) {
    this._findProduct()
  }

  ngOnInit(): void {
  }

  public add(): void {
    this._basketService.addItem(this.item.id, this.item.size);
    this._findProduct()
  }

  public remove(): void {
    this._basketService.removeItem(this.item.id, this.item.size);
    this._findProduct()

  }

  private _findProduct(): void {
    this._service.getProducts().subscribe((data: any) => {
      this.product = _.find(data.data, (o) => o.id === this.item.id)
      this.cost = this.item.quantity * Number(this.product.price.amount);
      console.log('this.product h :', this.product);
    })
  }

}
