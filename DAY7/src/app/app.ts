import { Component, signal } from '@angular/core';
import { Parent } from './parent/parent';
import { Parent2 } from './parent2/parent2';

@Component({
  selector: 'app-root',
  imports: [Parent, Parent2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DAY7');
}