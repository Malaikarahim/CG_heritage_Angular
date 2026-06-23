import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

import {
  Observable,
  throwError
} from 'rxjs';

import {
  retry,
  catchError,
  tap,
  map,
  switchMap
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  // GET ALL POSTS
  getPosts(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.baseUrl}/posts`
    ).pipe(
      retry(2),
      catchError(this.handleError)
    );

  }

  // GET SINGLE POST
  getPost(id: number): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/posts/${id}`
    ).pipe(
      catchError(this.handleError)
    );

  }

  // ADD POST
  addPost(post: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(
      `${this.baseUrl}/posts`,
      post,
      { headers }
    ).pipe(
      catchError(this.handleError)
    );

  }

  // UPDATE POST
  updatePost(id: number, post: any): Observable<any> {

    return this.http.put(
      `${this.baseUrl}/posts/${id}`,
      post
    ).pipe(
      catchError(this.handleError)
    );

  }

  // DELETE POST
  deletePost(id: number): Observable<any> {

    return this.http.delete(
      `${this.baseUrl}/posts/${id}`
    ).pipe(
      catchError(this.handleError)
    );

  }

  // GET USERS
  getUsers(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.baseUrl}/users`
    ).pipe(

      tap(response => {

        console.log('Raw Response : ', response);

      }),

      map(users =>
        users.map(user => ({
          name: user.name,
          email: user.email
        }))
      ),

      catchError(this.handleError)

    );

  }

  // SWITCHMAP EXAMPLE
  getUsersWithPosts() {

    return this.http.get<any[]>(
      `${this.baseUrl}/users`
    ).pipe(

      switchMap(users => {

        console.log('Users Loaded');

        return this.http.get<any[]>(
          `${this.baseUrl}/posts`
        );

      }),

      catchError(this.handleError)

    );

  }

  // WRONG URL FOR ERROR HANDLING
  getWrongData() {

    return this.http.get(
      `${this.baseUrl}/wrong`
    ).pipe(
      catchError(this.handleError)
    );

  }

  // ERROR HANDLING
  handleError(error: HttpErrorResponse) {

    let msg = '';

    switch (error.status) {

      case 400:
        msg = 'Bad Request';
        break;

      case 401:
        msg = 'Unauthorized';
        break;

      case 403:
        msg = 'Forbidden';
        break;

      case 404:
        msg = 'Resource Not Found';
        break;

      case 500:
        msg = 'Server Error';
        break;

      default:
        msg = 'Unknown Error';

    }

    console.error(msg);

    return throwError(() => msg);

  }

}