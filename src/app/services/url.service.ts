import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UrlService {
  constructor() {}

  getUrlStart(): string {
    const res = environment.production ? '/sport-culture' : '';
    return res;
  }

  buildUrl(route?: string): string {
    const env = this.getUrlStart();
    const res = `${env}${route}`;
    return res;
  }
}
