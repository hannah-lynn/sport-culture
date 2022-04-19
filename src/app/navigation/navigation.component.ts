import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasketDataService } from '../services/basket.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  public totalItems?: number;
  private _subscription!: Subscription;

  constructor(
    private _basketService: BasketDataService,
    private _router: Router,
    public urlService: UrlService
  ) {
    this._fetchData();
  }

  ngOnInit(): void {
    this._getInitialTotalItems();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public goToBasket(): void {
    this._router.navigateByUrl(this.urlService.buildUrl('/basket'));
  }

  private _getInitialTotalItems(): void {
    this.totalItems = this._basketService.getTotalBasketQuantity();
  }

  private _fetchData(): void {
    this._subscription = this._basketService.totalItems.subscribe(
      (data: number) => {
        this.totalItems = data;
      }
    );
  }
}
