import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getPlayers(): Observable<any> {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts');
  }

  getTeams(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
  }
}
