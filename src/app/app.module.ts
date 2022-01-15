import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShopComponent } from './shop/shop.component';
import { ShopCardComponent } from './shop/shop-card/shop-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShopComponent,
    ShopCardComponent,
    ShopDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
