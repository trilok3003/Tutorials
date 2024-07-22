import { TestBed } from '@angular/core/testing';

import { CalService } from './cal.service';
import { SharedService } from './shared.service';



xdescribe('CalService', () => {
  xit('should multiply two numbers', () => {
    let sharesService = new SharedService();
    let calService = new CalService(sharesService);
    const result = calService.multiply(3, 7);
    expect(result).toBe(21);
  });
  xit('should called shared service getData method without actual called', () => {
    let sharesService = new SharedService();
    let calService = new CalService(sharesService);
    spyOn(sharesService, 'getData')
    const result = calService.multiply(3, 7);
    expect(sharesService.getData).toHaveBeenCalled();
  });
  xit('should called shared service getData method with actual called', () => {
    let sharesService = new SharedService();
    let calService = new CalService(sharesService);
    spyOn(sharesService, 'getData').and.callThrough();
    const result = calService.multiply(3, 7);
    expect(sharesService.getData).toHaveBeenCalled();
  });
  it('should called shared service getData method with MockService', () => {
    let sharesService = jasmine.createSpyObj('SharedService', ['getData'])
    let calService = new CalService(sharesService);
    const result = calService.multiply(3, 7);
    expect(result).toBe(21);
    // expect(sharesService.getData).toHaveBeenCalled();
  });
});

describe('CalService', () => {
  let service: CalService;
  let sharedService: SharedService;

  beforeEach(() => {
    sharedService = jasmine.createSpyObj('SharedService', ['getData'])
    TestBed.configureTestingModule({
      providers: [CalService,
        // SharedService
        {provide: SharedService, useValue: sharedService}
      ]
    });
    service = TestBed.inject(CalService);
    sharedService = TestBed.inject(SharedService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should multiply two numbers', () => {
     const result = service.multiply(3,7);
     expect(result).toBe(21);
  })
});