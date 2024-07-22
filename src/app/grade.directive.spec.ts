import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GradeDirective } from './grade.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('GradeDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let ele: DebugElement;

  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      // declarations: [],
      imports: [AppComponent, GradeDirective]
     })
     fixture = TestBed.createComponent(AppComponent);
     component = fixture.componentInstance;
     ele = fixture.debugElement;
     fixture.detectChanges();
  }))



  it('should create an instance', () => {
    let mockEle = {
      nativeElement : document.createElement('div')
    }
    const directive = new GradeDirective(mockEle);
    expect(directive).toBeTruthy();
  });
  it('should change the color on mouse over', () => {
    let ps = ele.queryAll(By.css('p'));
    let p0 = ps[0];
    let p1 = ps[1];
    let p2 = ps[2];
    let p3 = ps[3];
    let p4 = ps[4];
    let p5 = ps[5];

    p0.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(p0.nativeElement.style.color).toBe('green');

    p1.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(p1.nativeElement.style.color).toBe('blue');

    p2.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(p2.nativeElement.style.color).toBe('blue');
    
    p3.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(p3.nativeElement.style.color).toBe('blue');

    p4.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(p4.nativeElement.style.color).toBe('blue');

    p5.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(p5.nativeElement.style.color).toBe('red');

  })
});
