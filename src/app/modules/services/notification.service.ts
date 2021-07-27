import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export interface Notification {
  type: string;
  message: string;
}

@Injectable()
export class NotificationService {
  notificationSubject: Subject<Notification> = new Subject<Notification>();

  success(message: string) {
    this.sendMessage({type: 'success', message});
  }

  error(message: string) {
    this.sendMessage({type: 'error', message});
  }

  info(message: string) {
    this.sendMessage({type: 'info', message});
  }

  warning(message: string) {
    this.sendMessage({type: 'warning', message});
  }

  private sendMessage(notification: Notification) {
    this.notificationSubject.next(notification);
  }

  getMessage(): Observable<Notification> {
    return this.notificationSubject.asObservable();
  }

  clearMessage() {
    this.notificationSubject.next();
  }
}
