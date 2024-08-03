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
  }
}
