import { Component } from '@angular/core';
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  protected breadcrumbs: any[] = [
    {
      label: 'About Us',
      path: '/about'
    }
  ] 
}
