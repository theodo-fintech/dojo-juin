import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NEVER, Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.handleUnauthorized(error),
        ),
      );
  }

  private handleUnauthorized(
    error: HttpErrorResponse,
  ): Observable<HttpEvent<unknown>> {
    if (error && error.status === 401) {
      this.authService.logout();
      this.router.navigate(['/login']);
      return NEVER;
    }

    return throwError(() => error);
  }
}
