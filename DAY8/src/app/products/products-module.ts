import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import { Products } from './products/products';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    Products
  ]
})
export class ProductsModule { }