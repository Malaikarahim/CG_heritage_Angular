import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.css'
})
export class Badge {

  @Input() label: string = '';
  @Input() color: string = 'green';

}