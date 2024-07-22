import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  router = inject(Router);
  goBack() {
    this.router.navigate(['/home']);
  }
}
