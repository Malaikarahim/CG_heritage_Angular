import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {

  private http = inject(HttpClient);

  posts: any[] = [];

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  angularTopics = [

    {
      title: 'HTTP Interceptors',
      body: 'HTTP Interceptors act as middleware in Angular. They intercept every HTTP request before it is sent and every response before it reaches the component. They are commonly used for authentication, logging, adding headers and centralized error handling.'
    },

    {
      title: 'Standalone Components',
      body: 'Standalone Components remove the dependency on NgModules. They simplify Angular projects by allowing components to directly import the dependencies they require.'
    },

    {
      title: 'Dependency Injection',
      body: 'Dependency Injection is one of Angular’s most powerful features. It automatically provides services wherever they are required, improving modularity and reducing tightly coupled code.'
    },

    {
      title: 'HttpClient',
      body: 'HttpClient is Angular’s built-in service for communicating with REST APIs. It supports GET, POST, PUT, PATCH and DELETE requests and works seamlessly with Observables.'
    },

    {
      title: 'RxJS Observables',
      body: 'Observables are asynchronous data streams provided by RxJS. Angular uses them for handling HTTP requests, events, forms and real-time data updates.'
    },

    {
      title: 'Angular Signals',
      body: 'Signals are Angular’s modern reactive state management feature. They automatically update the UI whenever the stored value changes without manual subscriptions.'
    },

    {
      title: 'Routing',
      body: 'Angular Routing enables navigation between multiple components without reloading the web page, creating a smooth Single Page Application (SPA) experience.'
    },

    {
      title: 'Lifecycle Hooks',
      body: 'Lifecycle Hooks such as ngOnInit(), ngOnDestroy() and ngAfterViewInit() allow developers to execute code at different stages of a component’s lifecycle.'
    }

  ];

  // SUCCESS REQUEST
  loadPosts(): void {

    this.http.get<any[]>(this.apiUrl).subscribe({

      next: (data) => {

        this.posts = data.slice(0, 8).map((item, index) => ({

          title: this.angularTopics[index].title,
          body: this.angularTopics[index].body

        }));

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  // ERROR REQUEST
  testError(): void {

    this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/postssss'
    ).subscribe({

      next: () => {},

      error: () => {}

    });

  }

}