import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(true);
  public isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string): Observable<void> {
    return this.http
      .post<void>(
        '/bff/login',
        {
          email,
        },
        { withCredentials: true }
      )
      .pipe(tap(() => this._isLoggedIn.next(true)));
  }

  logout(): void {
    this._isLoggedIn.next(false);
  }
}
