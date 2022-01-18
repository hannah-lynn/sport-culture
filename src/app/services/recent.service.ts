import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class RecentService {

  constructor() { }

  public getRecent(): IProduct[] {
    const res = JSON.parse(<string>localStorage.getItem('recent'));
    return res;
  }
}
