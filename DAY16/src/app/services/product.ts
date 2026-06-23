import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [

    {
      id: 1,
      name: 'Dell Laptop',
      price: 65000,
      description: 'Intel i7 Processor'
    },

    {
      id: 2,
      name: 'Samsung Mobile',
      price: 25000,
      description: '128 GB Storage'
    },

    {
      id: 3,
      name: 'Boat Headphone',
      price: 3000,
      description: 'Wireless Bluetooth'
    },

    {
      id: 4,
      name: 'Smart Watch',
      price: 5000,
      description: 'Fitness Tracking'
    }

  ];

  constructor() { }

  getProducts(): Observable<Product[]> {

    return of(this.products);

  }

}