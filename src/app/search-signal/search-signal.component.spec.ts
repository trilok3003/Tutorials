import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSignalComponent } from './search-signal.component';

describe('SearchSignalComponent', () => {
  let component: SearchSignalComponent;
  let fixture: ComponentFixture<SearchSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
