import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent {
  @Input() date!: Date;
  @Input() label!: string;
  @Input() value!: number;
}
