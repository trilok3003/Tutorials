import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appGrade]',
  standalone: true,
})
export class GradeDirective {
  @Input() mark = 0;

  constructor(private ele: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.mark >= 90) {
      this.ele.nativeElement.style.color = 'green';
    } else if (this.mark < 90 && this.mark >= 35) {
      this.ele.nativeElement.style.color = 'blue';
    } else {
      this.ele.nativeElement.style.color = 'red';
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.color = 'black';
  }
}
