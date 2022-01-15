import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/products';
import { ShopDataService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product!: IProduct;
  private _productId: string = '';


  constructor(private _route: ActivatedRoute, private _shopService: ShopDataService) {}

  ngOnInit(): void {
    this._productId = <string>this._route.snapshot.paramMap.get('id');
    this._getProduct();
  }

  private _getProduct(): void {
    this._shopService.getProducts().subscribe((data: any) => {
        for (let item of data.data) {
          if (item.id === this._productId) {
            this.product = item;
          }
        }
    })
  }

}
