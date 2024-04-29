import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserAmount } from '../interfaces/amount.interface';
import { Asset } from '../interfaces/asset.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  fetchUserScore(): Observable<any> {
    return this.http
      .get<any>('/bff/user/score')
  }
  constructor(private http: HttpClient) {}

  fetchUserAmount(): Observable<number> {
    return this.http
      .get<UserAmount>('/bff/user/amount')
      .pipe(map((response) => response.amount));
  }

  fetchUserRealties(): Observable<Asset[]> {
    return this.http.get<Asset[]>('/bff/assets');
  }
}
