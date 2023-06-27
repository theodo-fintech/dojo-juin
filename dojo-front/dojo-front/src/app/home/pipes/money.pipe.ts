import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
})
export class MoneyPipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value) return '';
    if (value?.charAt(0) === '-') return value;
    return '+' + value;
  }
}
