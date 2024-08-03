import { Component, inject } from '@angular/core';
import {ArticlesService} from'./services/articles.service'
import { SearchComponent } from "./ui/search.component";
import { ListComponent } from "./ui/list.component";
import { CommonModule } from '@angular/common';
import { PaginationComponent } from "./ui/pagination.component";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [SearchComponent, ListComponent, CommonModule, PaginationComponent],
  providers: [ArticlesService],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export default class ArticlesComponent {
  service = inject(ArticlesService);
}
