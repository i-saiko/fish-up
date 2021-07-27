import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let injector: TestBed;
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
    injector = getTestBed();
    service = injector.get(UsersService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getUsers', () => {
    it('should return an Observable<UserDTO[]>', () => {
      const expectedUsers = [
        { login: 'John' },
        { login: 'Doe' }
      ];

      service.getUsers().subscribe(users => {
        expect(users.length).toBe(20);
      });

      const req = httpMock.expectOne(`${service.endPoint}/users`);
      expect(req.request.method).toBe('GET');
      // req.flush(dummyUsers);
    });
  });
});
