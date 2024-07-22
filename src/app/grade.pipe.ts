import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade',
  standalone: true,
})
export class GradePipe implements PipeTransform {
  transform(value: number): unknown {
    let grade = '';
    if (value >= 90) {
      grade = 'A';
    } else if (value >= 80) {
      grade = 'B';
    } else if (value >= 70) {
      grade = 'C';
    } else if (value >= 60) {
      grade = 'D';
    } else if (value >= 50) {
      grade = 'E';
    } else if (value < 35) {
      grade = 'FAIL';
    }
    return grade;
  }
}
