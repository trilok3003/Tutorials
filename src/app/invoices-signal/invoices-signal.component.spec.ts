import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesSignalComponent } from './invoices-signal.component';

describe('InvoicesSignalComponent', () => {
  let component: InvoicesSignalComponent;
  let fixture: ComponentFixture<InvoicesSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicesSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoicesSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
