import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthorizationService } from '../modules/services/authorization.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthorizationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getAuthorization();
    if (token) {
      request = this.addToken(request, token);
    }

    return next.handle(request)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handleError(err): Observable<never> {
    if (err instanceof HttpErrorResponse && err.status === 401) {
      this.authService.logout();
      // this.router.navigate(['']);
    }

    return throwError(err);
  }
}
