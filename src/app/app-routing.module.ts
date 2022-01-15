import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: ShopComponent},
  { path: 'shop-details', component: ShopDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
