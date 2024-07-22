import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get all users', () => {
    service.getUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(2);
      let firstUser = users[0];
      expect(firstUser).toBe('user1');
    });
    const mockReq = testingController.expectOne('api/users');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(['user1', 'user 2']);
    // testingController.verify();
  });
  it('should get user', () => {
    service.getUser(0).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user).toBe('user1');
    });
    const mockReq = testingController.expectOne('api/users/0');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush('user1');
    // testingController.verify();
  });
  it('should update user', () => {
    let update = 'Trilok';
    service.updateUser(1, update).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user).toBe('Trilok');
    });
    const mockReq = testingController.expectOne('api/users/1');
    expect(mockReq.request.method).toEqual('PUT');
    expect(mockReq.request.body).toBe(update)
    mockReq.flush('Trilok');
    // testingController.verify();
  });
  afterEach(() => {
    testingController.verify();
  })
});
