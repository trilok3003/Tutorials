import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { delay, of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let app: AppComponent; 
  let fixture: ComponentFixture<AppComponent>;
  let ele: DebugElement
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
     fixture = TestBed.createComponent(AppComponent);
     app = fixture.componentInstance;
     ele = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-17' title`, () => {
    expect(app.title).toEqual('angular-17');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-17');
  });
  it('should test the Promise', fakeAsync(
    () => {
      let counter = 0;
      // macro task

      setTimeout(() => {
        counter = counter + 2;
      }, 2000)
      setTimeout(() => {
        counter = counter + 3;
      }, 2000);

      // micro task
      Promise.resolve().then(() => {
        counter = counter + 1;
      });
      flush();
      // tick(2000);
      // flushMicrotasks();
      // expect(counter).toBe(1);

      expect(counter).toBe(6);
    }
  ))
  it('should test the synchronous observable', () => {
    let isSubscribed = false;
    let obs = of(isSubscribed);
    obs.subscribe(() => {
      isSubscribed = true
    })
    expect(isSubscribed).toBeTrue()
  })
  it('should test the asynchronous observable', fakeAsync(() => {
    let isSubscribed = false;
    let obs = of(isSubscribed).pipe(delay(1000));
    obs.subscribe(() => {
      isSubscribed = true
    });
    tick(1000);
    expect(isSubscribed).toBeTrue();
  }))
  xit('should render a button with text Subscribe', () => {
     const btns = ele.queryAll(By.css('button'));
     app.isSubscribed = false;
     app.subscribeText = "Subscribe";
     fixture.detectChanges();
     expect(btns[0].nativeElement.textContent).toBe("Subscribe");
     expect(btns[0].nativeElement.disabled).toBeFalse();
  })
  xit('should render a button with text Subscribed and button is disabled', () => {
    const btns = ele.queryAll(By.css('button'));
    app.isSubscribed = true;
    app.subscribeText = "Subscribed";
    fixture.detectChanges();
    expect(btns[0].nativeElement.textContent).toBe("Subscribed");
    expect(btns[0].nativeElement.disabled).toBeTrue();
 })
 it('should render a button with text Subscribed and button is disabled', () => {
  const btns = ele.queryAll(By.css('button'));
  app.isSubscribed = false;
  app.subscribeText = "Subscribe";
  btns[0].nativeElement.click();
  fixture.detectChanges();
  expect(btns[0].nativeElement.textContent).toBe("Subscribed");
  expect(btns[0].nativeElement.disabled).toBeTrue();
})

});
