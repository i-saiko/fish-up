import {Injectable} from '@angular/core';

// import {Moment} from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  isDate(value): boolean {
    return value instanceof Date || (!isNaN(Date.parse(value)) && !value.match(/[а-я]+/ig));
  }

  isNaN(value): boolean {
    return isNaN(value);
  }

  isMonday(date: Date): boolean {
    return date.getDay() === 1;
  }

  formatDate(date: Date): string {
    const day = this.padLeadingZero(date.getDay());
    const month = this.padLeadingZero(date.getMonth() + 1);
    const year = date.getFullYear();
    return [year, month, day].join('-');
  }

  private padLeadingZero(value: number): string {
    return String(value).toString().padStart(2, '0');
  }
}
