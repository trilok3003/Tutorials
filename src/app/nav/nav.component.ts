import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  title = 'angular-17';
  protected links: any[] = [
    { label: 'Home', path: '/' }, 
    { label: 'Blog', path: 'blog' }, 
    { label: 'About', path: 'about' }, 
    { label: 'Contact', path: 'contact' }, 
    { label: 'Support', path: 'support' }
  ];
  protected isVisible = signal(false);
}
