import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketDataService } from '../services/basket.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public totalItems: number = 0;

  public items: number = 0;

  constructor(private _basketService: BasketDataService, private _router: Router) {
  }

  ngOnInit(): void {
    this.totalItems = this._basketService.getTotalItems();
  }

  public goToBasket(): void {
    this._router.navigateByUrl('/basket');
  }

}
