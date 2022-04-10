import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasketDataService } from '../services/basket.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  public totalItems: number = 0;
  private _subscription!: Subscription;

  constructor(
    private _basketService: BasketDataService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._basketService.totalItems.subscribe((data: number) => {
      this.totalItems = data;
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public goToBasket(): void {
    this._router.navigateByUrl('/basket');
  }
}
