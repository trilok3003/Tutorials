import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  selector: 'app-invoices',
  standalone: true,
  imports: [GridModule],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css',
})
export class InvoicesComponent implements OnChanges {
  @Input() config!: GridConfig;
  @Input({ required: true }) data: Array<unknown> = [];
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['config']) {
      this.config = defaultConfig;
      return;
    }
    const { title } = changes['config'].currentValue;
    if (!title) {
      this.config.title = 'Config without Title';
    }
  }
}
