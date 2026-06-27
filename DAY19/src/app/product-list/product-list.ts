import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  constructor(private cartService: CartService) {}

  products: CartItem[] = [

    {
      id: 1,
      name: 'Angular Complete Guide',
      price: 499,
      quantity: 1
    },

    {
      id: 2,
      name: 'TypeScript Handbook',
      price: 299,
      quantity: 1
    },

    {
      id: 3,
      name: 'RxJS Master Course',
      price: 699,
      quantity: 1
    }

  ];

  addToCart(product: CartItem) {

    this.cartService.addItem(product);

    alert(product.name + ' added to cart');

  }

}