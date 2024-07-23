import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridConfig, InvoicesComponent } from './invoices/invoices.component';
import { InvoicesSignalComponent } from "./invoices-signal/invoices-signal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvoicesComponent, InvoicesSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17';

  config: GridConfig = {
    title: 'Purchase Invoices',
    itemsPerPage: 7,
    enablePagination: true,
  };

  configWithoutTitle: GridConfig = {
    itemsPerPage: 5,
    enablePagination: true,
  };
  CREDIT_CARDS = [
    {
      card_number: '3561737837553025',
      card_holder_name: 'Jakob Parry',
      expiration_date: '3/12/2027',
      cvv: 385,
      card_limit: 'Ruble',
    },
    {
      card_number: '6706057341869513',
      card_holder_name: 'Chloette Weiser',
      expiration_date: '12/24/2025',
      cvv: 696,
      card_limit: 'Dollar',
    },
  ];
}
