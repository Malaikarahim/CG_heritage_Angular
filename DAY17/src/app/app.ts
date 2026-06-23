import { Component } from '@angular/core';
import { RxjsAssignment } from './rxjs-assignment/rxjs-assignment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RxjsAssignment],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}