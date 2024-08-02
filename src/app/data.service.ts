import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly apiUrl = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) {}

  // Other service methods go here
  getPaginatedData(page: number, itemsPerPage: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('itemsPerPage', itemsPerPage.toString());
    return this.http.get<any>(this.apiUrl, {
      params: { page, results: itemsPerPage },
    });

    // return this.http.get<any>('api/data', { params });
  }
  private dataCache: { [key: number]: any[] } = {};

  getPaginatedDataServerSideCaching(
    page: number,
    itemsPerPage: number
  ): Observable<any> {
    if (this.dataCache[page]) {
      return of(this.dataCache[page]); // Return the cached data
    } else {
      return (
        this.http
          .get<any>(this.apiUrl, { params: { page, results: itemsPerPage } })
          // .get<any>(`api/data?page=${page}&itemsPerPage=${itemsPerPage}`)
          .pipe(
            tap((data) => {
              this.dataCache[page] = data.results; // Cache the fetched data
            })
          )
      );
    }
  }
}
// https://medium.com/@hassaanali.dev/efficient-data-pagination-in-angular-implementing-smooth-and-performant-pagination-for-large-data-637fe994bbbf
