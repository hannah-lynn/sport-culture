import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProduct;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  public openProduct(id: string): void {
    // handles reload when same from same url with change of id
    this._router.routeReuseStrategy.shouldReuseRoute = function() { return false; };
    void this._router.navigateByUrl(`/shop/${Number(id)}`);
  }
}
