import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { provideHttpClient } from '@angular/common/http';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
  let MOCK_PRODUCTS = [
    {
      image: '',
      title: 'demo product',
      id: '3',
      price: '23',
    },
    {
      image: '',
      title: 'Kendo Product',
      id: '4',
      price: '675',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ProductsService,
      ],
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call http request', fakeAsync(() => {
    service.products$.subscribe((res) => {
      expect(res).toEqual(MOCK_PRODUCTS);
    });
    const req = httpTestingController.expectOne('https://fakestoreapi.com/products');
    httpTestingController.verify();
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_PRODUCTS);
    flush();
  }));
});
