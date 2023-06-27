import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  constructor(private http: HttpClient) {
  }


  sellRealty(realtyId: number): Observable<void> {
    return this.http.post<void>('/bff/assets/sell', { realtyId });
  }
}
