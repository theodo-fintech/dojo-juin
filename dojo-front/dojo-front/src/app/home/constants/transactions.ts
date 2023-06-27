import { Transaction } from '../interfaces/transaction.interface';

export const Transactions: Transaction[] = [
  {
    date: new Date('03-27-2023'),
    label: 'Achat investissement 1',
    value: -173,
  },
  {
    date: new Date('03-22-2023'),
    label: 'Loyer investissement 23456',
    value: 1200,
  },
  {
    date: new Date('03-21-2023'),
    label: 'Loyer appartement',
    value: -450,
  },
  {
    date: new Date('03-20-2023'),
    label: 'Achat investissement 23456',
    value: -27000,
  },
  {
    date: new Date('03-04-2023'),
    label: 'Loyer investissement 23498',
    value: +370,
  },
];
