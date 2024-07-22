import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';

import { InfoComponent } from './info.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render a button with text Subscribe', () => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btns = el.queryAll(By.css('button'));
    expect(btns[0].nativeElement.textContent).toBe('Subscribe');
    expect(btns[0].nativeElement.disabled).toBeFalse();
  });
  xit('should render a button with text Subscribed and button is disabled', () => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btns = el.queryAll(By.css('button'));
    btns[0].nativeElement.click();
    fixture.detectChanges();
    btns = el.queryAll(By.css('button'));
    expect(btns[0].nativeElement.textContent).toBe('Subscribed');
    expect(btns[0].nativeElement.disabled).toBeTrue();
  });
  xit('should render a button with text Subscribed and button is disabled', (done: DoneFn) => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btns = el.queryAll(By.css('button'));
    btns[0].nativeElement.click();
    setTimeout(() => {
      fixture.detectChanges();
      btns = el.queryAll(By.css('button'));
      expect(btns[0].nativeElement.textContent).toBe('Subscribed');
      expect(btns[0].nativeElement.disabled).toBeTrue();
      done();
    }, 3000);
  });
  it('should render a button with text Subscribed and button is disabled', fakeAsync(() => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btns = el.queryAll(By.css('button'));
    btns[0].nativeElement.click();
    setTimeout(() => {
      fixture.detectChanges();
      btns = el.queryAll(By.css('button'));
    }, 3000);
    flush();
    expect(btns[0].nativeElement.textContent).toBe('Subscribed');
    expect(btns[0].nativeElement.disabled).toBeTrue();
  }));
});
