import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { delay, finalize } from 'rxjs';

export const fnLoaderInterceptor: HttpInterceptorFn = (req, next) => {
  let loaderService = inject(LoaderService);
  loaderService.show();
  return next(req).pipe(
    delay(2000),
    finalize(() => {
      loaderService.hide();
    })
  );
};
