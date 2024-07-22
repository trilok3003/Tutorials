import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
  imports: [NgIf]
})
export class InfoComponent {
  router = inject(Router);
  isSubscribed = false;
  goBack() {
    this.router.navigate(['/home']);
  }
  onSubscribe() {
   setTimeout(() => {
    this.isSubscribed = true
   }, 3000)
  }
}
