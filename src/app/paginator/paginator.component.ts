import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  // will be removed once signal based inputs are released!
  @Input({ alias: 'items' }) set _items(items: any[]) {
    this.items.set(items);
  }
  @Input({ alias: 'currentPageIndex' }) set _currentPageIndex(
    currentPageIndex: number
  ) {
    this.currentPageIndex.set(currentPageIndex);
  }
  @Input({ alias: 'pageSize' }) set _pageSize(pageSize: number) {
    this.pageSize.set(pageSize);
  }

  pageSizes = [5, 10, 20];

  // will be converted to inputs...  items = input([]);
  items = signal<string[]>([]);
  currentPageIndex = signal(0);
  pageSize = signal(5);

  // computed derived state and effect...
  pageCount = computed(() => Math.ceil(this.items().length / this.pageSize()));
  page = computed(() => {
    const startIndex = this.pageSize() * this.currentPageIndex();
    const endIndex = startIndex + this.pageSize();
    return this.items().slice(startIndex, endIndex);
  });
  constructor() {
    effect(
      () => {
        this.items();
        this.pageSize();
        this.currentPageIndex.set(0);
      },
      { allowSignalWrites: true }
    );
  }
  next() {
    if (this.currentPageIndex() < this.pageCount() - 1) {
      this.currentPageIndex.update((index) => index + 1);
    }
  }

  prev() {
    if (this.currentPageIndex() > 0) {
      this.currentPageIndex.update((index) => index - 1);
    }
  }
}
