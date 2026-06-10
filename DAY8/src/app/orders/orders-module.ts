import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing-module';
import { Orders } from './orders/orders';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    Orders
  ]
})
export class OrdersModule { }