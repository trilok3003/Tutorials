import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading$ = new Subject<boolean>();
  show(): void {
    this.isLoading$.next(true);
    // console.log('hello')
  }
  hide(): void {
    this.isLoading$.next(false);
    // console.log('world')

  }
}
