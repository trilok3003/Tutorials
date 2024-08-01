import { map, Observable } from 'rxjs';
import { Apollo, QueryRef, WatchQueryOptions } from 'apollo-angular';
import { inject, Injectable } from '@angular/core';
import { MutationOptions } from '@apollo/client/core/watchQueryOptions';
import { CrudService } from './crud.service';
import type { SubscriptionOptions } from '@apollo/client/core';
@Injectable({
  providedIn: 'root',
})
export class ApolloCrudService implements CrudService<any> {
  private apollo: Apollo = inject(Apollo);
  get(options: WatchQueryOptions): Observable<any> {
    return this.apollo
      .watchQuery(options)
      .valueChanges.pipe(map(data => data['data']));
  }
  fetch(options: SubscriptionOptions): Observable<any> {
    return this.apollo.subscribe(options).pipe(map(data => data['data']));
  }

  save(options: MutationOptions): Observable<any> {
    return this.apollo.mutate(options).pipe(map(data => data['data']));
  }
}
