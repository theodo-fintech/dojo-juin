import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  fetchTransactions(): Observable<Transaction[]> {
    return this.http.get<any[]>('/bff/transactions').pipe(
      map((response) =>
        response.map((transaction) => ({
          date: transaction.createdAt,
          label: transaction.realty.label,
          value: transaction.amount,
        })),
      ),
    );
  }
}
