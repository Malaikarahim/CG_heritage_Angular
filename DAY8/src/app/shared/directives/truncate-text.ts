import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTruncateText]',
  standalone: true
})
export class TruncateText implements OnInit {

  @Input() maxChars: number = 10;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {

    let text = this.el.nativeElement.innerText;

    if (text.length > this.maxChars) {
      this.el.nativeElement.innerText =
        text.substring(0, this.maxChars) + '...';
    }

  }

}