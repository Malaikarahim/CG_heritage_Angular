import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee',
  standalone: true
})
export class RupeePipe implements PipeTransform {

  transform(value: number): string {

    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(value);

  }

}