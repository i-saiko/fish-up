import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of, throwError } from 'rxjs';

import { ToastrModule, ToastrService } from 'ngx-toastr';

import { RestService } from './rest.service';

describe('RestService', () => {
  let restClientService: RestService;
  let notificationService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        RestService,
        ToastrService
      ]
    });
    restClientService = TestBed.get(RestService);
    notificationService = TestBed.get(ToastrService);
  });

  it('should create the rest client service', () => {
    expect(restClientService).toBeTruthy();
  });

  describe('successResponse', () => {
    it('should call successResponse when no errors', (done) => {
      const spy = spyOn(restClientService, 'successResponse').and.callThrough();
      const response = 'HttpResponse';
      const responseStub = of(response);
      restClientService.handleResponse(responseStub, {})
        .subscribe(res => {
          expect(spy).toHaveBeenCalledWith(response, {});
          done();
        });
    });

    it('should send success notification when config provided', (done) => {
      const spy = spyOn(notificationService, 'success').and.callThrough();
      const response = 'HttpResponse';
      const responseStub = of(response);
      restClientService.handleResponse(responseStub, { 200: 'OK' })
        .subscribe(res => {
          expect(spy).toHaveBeenCalledWith('OK');
          done();
        });
    });

    it('should not send success notification when no config provided', (done) => {
      const spy = spyOn(notificationService, 'success');
      const response = 'HttpResponse';
      const responseStub = of(response);
      restClientService.handleResponse(responseStub)
        .subscribe(res => {
          expect(spy).not.toHaveBeenCalledWith();
          done();
        });
    });
  });

  describe('errorResponse', () => {
    it('should throw errorResponse when there is response with error', () => {
      const spy = spyOn(restClientService, 'errorResponse').and.callThrough();
      const errorResponse = 'responseError';
      const responseStub = throwError(errorResponse);
      restClientService.handleResponse(responseStub, {})
        .subscribe(
          res => {
          },
          err => expect(spy).toHaveBeenCalled()
        );
    });

    it('should send error notification when config provided', () => {
      const spy = spyOn(notificationService, 'error').and.callThrough();
      const errorResponse = {
        message: 'responseError',
        status: 400
      };
      const responseStub = throwError(errorResponse);
      restClientService.handleResponse(responseStub, { 400: 'Bad Request' })
        .subscribe(res => {},
          err => {
            expect(spy).toHaveBeenCalledWith('Bad Request');
          });
    });

    it('should not send error notification when no config provided', () => {
      const spy = spyOn(notificationService, 'error');
      const errorResponse = {
        message: 'responseError',
        status: 400
      };
      const responseStub = throwError(errorResponse);
      restClientService.handleResponse(responseStub)
        .subscribe(res => {},
          err => {
            expect(spy).not.toHaveBeenCalled();
          });
    });
  });
});
