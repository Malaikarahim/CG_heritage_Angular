import { Component } from '@angular/core';
import { Counter } from './counter/counter';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Counter,
    ProductList,
    Cart
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'DAY19';
}