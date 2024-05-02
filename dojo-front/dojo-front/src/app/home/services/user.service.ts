import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserAmount } from '../interfaces/amount.interface';
import { Asset } from '../interfaces/asset.interface';
import { Score } from 'src/app/navbar/interfaces/score.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  fetchUserScore(): Observable<Score> {
    return this.http
      .get<Score>('/bff/user/score')
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
