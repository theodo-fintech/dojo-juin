import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REALTY_TYPE, Realty } from 'src/shared/interface/realty';

@Injectable({
  providedIn: 'root',
})
export class RealtiesService {
  constructor(private http: HttpClient) {}

  fetchRealties(type?: REALTY_TYPE): Observable<Realty[]> {
    let params = new HttpParams();
    if (type) params = params.append('deedType', type);

    return this.http.get<Realty[]>('/bff/realties', {
      params: params,
    });
  }

  buyRealty(realtyId: number): Observable<void> {
    return this.http.post<void>('/bff/realties/buy', { realtyId });
  }
}
