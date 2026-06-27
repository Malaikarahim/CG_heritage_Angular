import {
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';

import { inject } from '@angular/core';

import { Router } from '@angular/router';

import {
  retry,
  catchError
} from 'rxjs';

import { throwError } from 'rxjs';

import { ToastService } from '../services/toast';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const toast = inject(ToastService);

  const router = inject(Router);

  return next(req).pipe(

    retry(2),

    catchError((error: HttpErrorResponse) => {

      switch (error.status) {

        case 400:
          toast.show('400 - Bad Request');
          break;

        case 401:
          toast.show('401 - Unauthorized');
          localStorage.removeItem('token');
          router.navigate(['/']);
          break;

        case 403:
          toast.show('403 - Forbidden');
          break;

        case 404:
          toast.show('404 - Resource Not Found');
          break;

        case 500:
          toast.show('500 - Internal Server Error');
          break;

        default:
          toast.show('Unexpected Error Occurred');

      }

      return throwError(() => error);

    })

  );

};