import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    console.log('called')
  }
  getData() {
    console.log('data')
  }
}
