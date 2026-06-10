import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent2',
  imports: [Child],
  templateUrl: './parent2.html',
  styleUrl: './parent2.css'
})
export class Parent2 {

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

}