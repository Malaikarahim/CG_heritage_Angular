import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child implements OnChanges {

  @Input() counter = 0;

  previousValue = 0;

  increase = false;
  decrease = false;

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['counter']) {

      this.previousValue =
        changes['counter'].previousValue ?? 0;

      let currentValue =
        changes['counter'].currentValue;

      this.increase = currentValue > this.previousValue;
      this.decrease = currentValue < this.previousValue;
    }

  }
}