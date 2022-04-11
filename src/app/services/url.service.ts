import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UrlService {
  constructor() {}

  getUrlStart(): string {
    return environment.production ? '/sport-culture' : '';
  }

  buildUrl(route?: string): string {
    const env = this.getUrlStart();
    return `${env}${route}`;
  }
}
