import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform(value: number[], order: "asc" | "desc" = "asc"): number[] {
    return value.sort((a, b) => {
      if (order === "asc") {
        return a - b;
      } else if (order === "desc") {
        return b - a;
      }
      return 0;
    });
  }

}
