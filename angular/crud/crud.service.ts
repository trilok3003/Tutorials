import { CrudInterface } from './crud.interface';
import { Observable } from 'rxjs';
import { forwardRef, Injectable } from '@angular/core';
import { ApolloCrudService } from './apollo-crud.service';

@Injectable({
  providedIn: 'root',
  useClass: forwardRef(() => ApolloCrudService),
})
export abstract class CrudService<T> implements CrudInterface<T> {
  abstract save(t: T): Observable<T>;

  abstract get(t: T): Observable<T>;
  abstract fetch(t: T): Observable<T>;
}
