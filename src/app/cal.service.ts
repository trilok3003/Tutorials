import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalService {

  constructor(private sharedService: SharedService) { }
  multiply(a: number, b: number) {
    this.sharedService.getData();
    return a * b;
  }
}
