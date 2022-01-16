import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShopComponent } from './shop/shop.component';
import { ProductCardComponent } from './shop/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { BasketComponent } from './basket/basket/basket.component';
import { BasketItemComponent } from './basket/basket-item/basket-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShopComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    BasketComponent,
    BasketItemComponent
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
