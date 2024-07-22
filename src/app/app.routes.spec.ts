import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('app routing', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;
  homeCompoenet: HomeComponent;
  let homefixture: ComponentFixture<HomeComponent>;
  let homeEle: DebugElement;

  let infofixture: ComponentFixture<InfoComponent>;
  let infoEle: DebugElement;

  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule.withRoutes(routes),
        AppComponent,
        HomeComponent,
        InfoComponent,
      ],
      providers: [provideRouter(routes)],
    }).compileComponents();
    // router = TestBed.inject(Router);
    // location = TestBed.inject(Location);
    // spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    homefixture = TestBed.createComponent(HomeComponent);
    homeEle = homefixture.debugElement;
    infofixture = TestBed.createComponent(InfoComponent);
    infoEle = infofixture.debugElement;
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should naviagte to the default path = home', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  }));
  it('should be navigate to info while click on home', waitForAsync(() => {
    homefixture.detectChanges();
    let links = homeEle.queryAll(By.css('a'));
    links[0].nativeElement.click();
    homefixture.whenStable().then(() => {
      expect(location.path()).toBe('/info');
    });
  }));
  it('should be navigate to home while click on info back', waitForAsync(() => {
    infofixture.detectChanges();
    let btns =  infoEle.queryAll(By.css('button'));
    btns[0].nativeElement.click();
    infofixture.whenStable().then(() => {
        expect(location.path()).toBe('/home')
    })

  }))
});
