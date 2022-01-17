import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../interfaces/product'

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
    void this._router.navigateByUrl(`/shop/${Number(id)}`);
  }
}
