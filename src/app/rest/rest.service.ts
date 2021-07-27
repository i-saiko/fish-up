import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotificationService } from '../modules/services/notification.service';

@Injectable()
export class RestService {
  constructor(
    public http: HttpClient,
    private notification: NotificationService
  ) {}

  handleResponse<T>(response: Observable<T>, config = {}): Observable<T> {
    return response
      .pipe(
        map(res => this.successResponse(res, config)),
        catchError(error => this.errorResponse(error, config))
      );
  }

  successResponse(response, config) {
    if (config[200]) {
      this.notification.success(config[200]);
    }

    return response;
  }

  errorResponse(error, config): Observable<never> {
    if (config[error.status]) {
      this.notification.error(config[error.status]);
    }

    return throwError(error);
  }
}
