import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cart.asObservable();

  constructor() {}

  addItem(item: CartItem) {

    const items = [...this.cart.value];

    const existing = items.find(x => x.id === item.id);

    if (existing) {
      existing.quantity++;
    } else {
      items.push({ ...item, quantity: 1 });
    }

    this.cart.next(items);
  }

  increaseQuantity(id: number) {

    const items = [...this.cart.value];

    const product = items.find(x => x.id === id);

    if (product) {
      product.quantity++;
    }

    this.cart.next(items);
  }

  decreaseQuantity(id: number) {

    const items = [...this.cart.value];

    const product = items.find(x => x.id === id);

    if (product) {

      product.quantity--;

      if (product.quantity <= 0) {
        this.removeItem(id);
        return;
      }

    }

    this.cart.next(items);
  }

  removeItem(id: number) {

    const items = this.cart.value.filter(x => x.id !== id);

    this.cart.next(items);
  }

  clearCart() {

    this.cart.next([]);

  }

  getTotal() {

    return this.cart.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

  }

  getItemCount() {

    return this.cart.value.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

  }

}