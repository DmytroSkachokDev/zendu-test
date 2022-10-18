import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(date: string): string {
    const month: string = date.slice(0, 3);
    const day: number = new Date(date).getDate();
    const time: string = new Date(date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return `${month}, ${day} ${time}`;
  }

}
