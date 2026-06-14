import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { EnvironmentService } from './services/environment';

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(public envService: EnvironmentService) {}

}