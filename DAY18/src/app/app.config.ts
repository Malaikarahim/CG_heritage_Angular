import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { provideRouter } from '@angular/router';

import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';

import {
  provideHttpClient,
  withInterceptors,
  withFetch
} from '@angular/common/http';

import { routes } from './app.routes';

import { loggingInterceptor } from './interceptors/logging-interceptor';

import { errorInterceptor } from './interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {

  providers: [

    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideClientHydration(
      withEventReplay()
    ),

    provideHttpClient(

      withFetch(),

      withInterceptors([

        loggingInterceptor,

        errorInterceptor

      ])

    )

  ]

};