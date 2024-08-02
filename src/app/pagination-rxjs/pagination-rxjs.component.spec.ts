import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationRxjsComponent } from './pagination-rxjs.component';

describe('PaginationRxjsComponent', () => {
  let component: PaginationRxjsComponent;
  let fixture: ComponentFixture<PaginationRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationRxjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
