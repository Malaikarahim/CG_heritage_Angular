import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit{

  cartItems:CartItem[]=[];

  total=0;

  itemCount=0;

  constructor(private cartService:CartService){}

  ngOnInit(){

    this.cartService.cart$.subscribe(items=>{

      this.cartItems=items;

      this.total=this.cartService.getTotal();

      this.itemCount=this.cartService.getItemCount();

    });

  }

  increase(id:number){

    this.cartService.increaseQuantity(id);

  }

  decrease(id:number){

    this.cartService.decreaseQuantity(id);

  }

  remove(id:number){

    this.cartService.removeItem(id);

  }

  clear(){

    this.cartService.clearCart();

  }

}