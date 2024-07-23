import { Component, input } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';

export type GridConfig = {
  title?: string;
  enablePagination: boolean;
  itemsPerPage: number;
};
const defaultConfig: GridConfig = {
  title: 'Default Config',
  enablePagination: true,
  itemsPerPage: 3,
};

@Component({
  selector: 'app-invoices-signal',
  standalone: true,
  imports: [GridModule],
  templateUrl: './invoices-signal.component.html',
  styleUrl: './invoices-signal.component.css'
})
export class InvoicesSignalComponent {
  kendoConfig = input(defaultConfig, {
    alias: 'config',
    transform: (config: GridConfig) => {
      config.title = config?.title   || 'Config but without title'
      return config
    }
  })
  data =input.required<Array<unknown>>();
}
