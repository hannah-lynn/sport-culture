import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/products'

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {
  @Input() product!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
