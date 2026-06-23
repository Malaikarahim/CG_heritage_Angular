import { Component } from '@angular/core';
import { Posts } from './posts/posts';
import { Users } from './users/users';
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    Posts,
    Users,
    Products
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}