import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product'
import { Router } from '@angular/router';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProduct;

  constructor(private _router: Router, private _urlService: UrlService) {}

  ngOnInit(): void {}

  public openProduct(id: string): void {
    // handles reload when from same url with change of id
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    void this._router.navigate([`/shop/` + id]);
  }
}
