import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, tap, timer } from 'rxjs';
import { Transaction } from './interfaces/transaction.interface';
import { TransactionService } from './services/transaction.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transactions$!: Observable<Transaction[]>;
  amount: number | null = null;

  constructor(
    private transactionService: TransactionService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.transactions$ = this.transactionService.fetchTransactions();
    combineLatest(timer(5000, 5000), this.userService.fetchUserAmount())
      .pipe(
        tap(([_, amount]) => {
          this.amount = amount;
        }),
      )
      .subscribe();
  }
}
