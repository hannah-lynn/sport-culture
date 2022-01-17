import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ShopDataService } from 'src/app/services/shop.service';
import { IBasketItem } from 'src/app/interfaces/basket-item';
import { BasketDataService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product!: IProduct;
  public itemSize!: number;
  public noSize: boolean = false;
  public btnText: string = 'Add to bag'
  private _productId: string = '';
  private _basket: IBasketItem[] = [];

  constructor(private _route: ActivatedRoute, private _shopService: ShopDataService, private _basketService: BasketDataService) {
    this._basket = this._basketService.getBasket();
  }

  ngOnInit(): void {
    this._productId = <string>this._route.snapshot.paramMap.get('id');
    this._getProduct();
  }

  public addToBasket(product: IProduct): boolean | void {
    if(!this.itemSize) {
      return this.noSize = true;
    }
    this._basketService.addItem(product, this.itemSize)
      this.btnText = 'Added!';
      setTimeout(() => {
        this.btnText = 'Add to bag';
      }, 1000);
  }

  private _getProduct(): void {
    this._shopService.getProducts().subscribe((data: any) => {
      this.product = _.find(data.data, (o) => o.id === this._productId);
    })
  }

}
