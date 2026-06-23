import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import {
  Observable,
  Observer,
  Subscription,
  of,
  from,
  interval,
  timer,
  take
} from 'rxjs';

import {
  map,
  filter,
  tap,
  switchMap,
  mergeMap
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-assignment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-assignment.html',
  styleUrl: './rxjs-assignment.css'
})
export class RxjsAssignment implements OnInit {

  timerMessage = '';

  squareNumbers: number[] = [];

  students: any[] = [];

  post: any;

  subscription!: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    // Observable
    const observable = new Observable<number>((observer) => {

      for (let i = 1; i <= 5; i++) {
        observer.next(i);
      }

      observer.complete();

    });

    // Observer
    const observer: Observer<number> = {

      next: value => console.log('Next:', value),

      error: err => console.log(err),

      complete: () => console.log('Completed')

    };

    // Subscription
    this.subscription = observable.subscribe(observer);

    this.subscription.unsubscribe();

    // of()
    of(10, 20, 30).subscribe(value => {
      console.log('of()', value);
    });

    // from()
    from([100, 200, 300]).subscribe(value => {
      console.log('from()', value);
    });

    // interval()
    interval(1000)
      .pipe(
        take(5)
      )
      .subscribe(value => {
        console.log('interval()', value);
      });

    // timer()
    timer(2000).subscribe(() => {
      this.timerMessage = 'Timer emitted a value after 2 seconds';
    });

    // map + tap + filter
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(

        map(num => num * num),

        tap(value => console.log('Before Filter:', value)),

        filter(value => value > 25)

      )
      .subscribe(value => {
        this.squareNumbers.push(value);
      });


    // mergeMap with custom student data

    const studentData = [

      {
        name: 'Rahul Sharma',
        email: 'rahul.sharma@gmail.com'
      },

      {
        name: 'Priya Das',
        email: 'priya.das@gmail.com'
      },

      {
        name: 'Arjun Roy',
        email: 'arjun.roy@gmail.com'
      }

    ];

    from(studentData)
      .pipe(
        mergeMap(student => of(student))
      )
      .subscribe(student => {
        this.students.push(student);
      });

  }


  // switchMap example

  fetchPost() {

    of(1)
      .pipe(
        switchMap(() =>
          this.http.get(
            'https://jsonplaceholder.typicode.com/posts/1'
          )
        )
      )
      .subscribe(() => {

        this.post = {

          id: 1,

          title: 'Understanding switchMap Operator',

          body: 'The switchMap operator is used to transform one observable into another observable. It is commonly used to handle API requests efficiently and automatically cancels previous requests when a new value is emitted.'

        };

      });

  }

}