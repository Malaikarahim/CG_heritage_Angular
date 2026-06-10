import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleLogger } from '../lifecycle-logger/lifecycle-logger';

@Component({
  selector: 'app-parent',
  imports: [CommonModule, LifecycleLogger],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {

  counter = 1;
  showChild = true;

  changeInput() {
    this.counter++;
  }

  toggleChild() {
    this.showChild = !this.showChild;
  }

}