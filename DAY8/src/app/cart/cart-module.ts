import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing-module';
import { Cart } from './cart/cart';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    Cart
  ]
})
export class CartModule { }