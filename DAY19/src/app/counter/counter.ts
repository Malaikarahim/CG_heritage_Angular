import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  // Signal
  count = signal(0);

  // Computed Signals
  double = computed(() => this.count() * 2);

  square = computed(() => this.count() * this.count());

  constructor() {

    effect(() => {
      console.log("Counter Changed :", this.count());
    });

  }

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {

    if (this.count() > 0) {
      this.count.update(value => value - 1);
    }

  }

  addFive() {
    this.count.update(value => value + 5);
  }

  reset() {
    this.count.set(0);
  }

}