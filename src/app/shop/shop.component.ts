import { Component, OnInit } from '@angular/core';
import { ShopDataService } from '../services/shop.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public products: any;

  constructor(private _service: ShopDataService) { }

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this._service.getProducts().subscribe((data: any) => {
      this.products = data.data;
    });
  }

};
