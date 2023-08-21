import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any): any {
    const date = new Date(value);

    if (!isNaN(date.getTime())) {
      const formattedDate = date.toLocaleString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      });
      return formattedDate;
    } else {
      return value;
    }
  }
}
