import { Observable } from 'rxjs';

export interface CrudInterface<T> {
  save(t: T): Observable<T>;
  get(t: T): Observable<T>;
}
