import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { fnLoaderInterceptor } from './interceptors/fn-loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([fnLoaderInterceptor])),
    // provideHttpClient(),
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
};
