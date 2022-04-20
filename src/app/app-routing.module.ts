import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket/basket.component';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'sport-culture/shop/:id', component: ProductDetailsComponent },
  { path: 'sport-culture/basket', component: BasketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
