import * as _ from 'lodash';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketDataService } from 'src/app/services/basket.service';
import { IBasketItem } from 'src/app/interfaces/basket-item';
import { IProduct } from 'src/app/interfaces/product';
import { RecentService } from 'src/app/services/recent.service';
import { ShopDataService } from 'src/app/services/shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  public product!: IProduct;
  public itemSize!: number;
  public noSize: boolean = false;
  public btnText: string = 'Add to bag'
  public selected: boolean = false;
  public recentlyViewed!: IProduct[];
  private _productId: string = '';
  private _basket: IBasketItem[] = [];
  private _subscription!: Subscription;

  constructor(private _route: ActivatedRoute, private _shopService: ShopDataService, private _basketService: BasketDataService, private _recentService: RecentService) {
    this._basket = this._basketService.getBasket();
    this.recentlyViewed = this._recentService.getRecent();
  }

  ngOnInit(): void {
    this._productId = <string>this._route.snapshot.paramMap.get('id');
    this._getProduct();
  }


  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public addToBasket(product: IProduct): boolean | void {
    if(!this.itemSize) {
      return this.noSize = true;
    }
    this._basketService.addItem(product, this.itemSize);
    this.noSize = false;
    this.btnText = 'Added!';
    setTimeout(() => {
      this.btnText = 'Add to bag';
    }, 1000);
  }

  private _getProduct(): void {
    this._subscription = this._shopService.getProducts().subscribe((data: any) => {
      this.product = _.find(data.data, (o) => o.id === this._productId);
      this._addToRecent();
    });
  }

  private _addToRecent(): void {
    let recent = JSON.parse(<string>localStorage.getItem('recent'));
    if (!recent) {
      recent = [];
    }
    for (const item of recent) {
      if (item.id === this.product.id) {
        return;
      }
    }
    recent.unshift(this.product);
    localStorage.setItem('recent', JSON.stringify(recent));
  }

}
