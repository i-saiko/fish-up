import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class WorkingPeriodService {
  daysInMonths: number[] = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

  getWorkingWeek(value: Date): string[] {
    switch (value.getDay()) {
      case 1:
        return [ this.getDate(0), this.getDate(6) ];
      case 2:
        return [ this.getDate(-1), this.getDate(5) ];
      case 3:
        return [ this.getDate(-2), this.getDate(4) ];
      case 4:
        return [ this.getDate(-3), this.getDate(3) ];
      case 5:
        return [ this.getDate(-4), this.getDate(2) ];
      case 6:
        return [ this.getDate(-5), this.getDate(1) ];
      case 0:
        return [ this.getDate(-6), this.getDate(0) ];
    }
  }

  getWorkingMonth(value: Date): string[] {
    const year = value.getFullYear();
    const month = value.getMonth();
    return [ `${year}-${this.getString(month + 1)}-01`, `${year}-${this.getString(month + 1)}-${this.daysInMonths[ month ]}` ];
  }

  getWorkingQuarter(value: Date): string[] {
    const year = value.getFullYear();
    const month = value.getMonth();
    if (month <= 2) {
      return [ `${year}-01-01`, `${year}-03-${this.daysInMonths[ 2 ]}` ];
    }
    if (month <= 5) {
      return [ `${year}-04-01`, `${year}-06-${this.daysInMonths[ 5 ]}` ];
    }
    if (month <= 8) {
      return [ `${year}-07-01`, `${year}-09-${this.daysInMonths[ 8 ]}` ];
    }
    return [ `${year}-10-01`, `${year}-12-${this.daysInMonths[ 11 ]}` ];
  }

  getString(data: number): string {
    if (data < 10) {
      return 0 + String(data);
    }
    return String(data);
  }

  getDate(newNumber: number): string {
    return `${new Date().getFullYear()}-${this.getString(new Date().getMonth() + 1)}-${this.getString(new Date().getDate() + newNumber)}`;
  }
}
