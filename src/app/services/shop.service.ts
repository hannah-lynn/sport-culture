import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ShopDataService {

  constructor( private _http: HttpClient) { }

  public getProducts(): Observable<{}>{
    return this._http.get('https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json');
  }
}
