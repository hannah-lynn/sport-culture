import { Component, OnInit } from '@angular/core';
import { IBasketItem } from 'src/app/interfaces/basket-item';
import { BasketDataService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  public items: IBasketItem[] = [];

  constructor(private _basketService: BasketDataService) { }

  ngOnInit(): void {
    this.items = this._basketService.getBasket();
  }

}
