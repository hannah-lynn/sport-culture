import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UrlService {
  constructor() {}

  getUrlStart(): string {
    const res = environment.production ? '/sport-culture' : '';
    console.log('res 1:', res);
    return res;
  }

  buildUrl(route?: string): string {
    const env = this.getUrlStart();
    const res = `${env}${route}`;
    console.log('res 2:', res);
    return res;
  }
}
