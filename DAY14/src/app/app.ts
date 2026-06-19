import { Component } from '@angular/core';

import { Q1Component } from './q1/q1';
import { Q2Component } from './q2/q2';
import { Q3Component } from './q3/q3';
import { Q4Component } from './q4/q4';
import { Q5Component } from './q5/q5';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Q1Component,
    Q2Component,
    Q3Component,
    Q4Component,
    Q5Component
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}