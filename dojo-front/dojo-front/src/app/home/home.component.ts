import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Transaction} from './interfaces/transaction.interface';
import {TransactionService} from './services/transaction.service';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transactions$!: Observable<Transaction[]>;
  amount$!: Observable<number>;

  constructor(
    private transactionService: TransactionService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.transactions$ = this.transactionService.fetchTransactions();
    setInterval(() => {
      this.amount$ = this.userService.fetchUserAmount()
    }, 7200000);
  }
}
