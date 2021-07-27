import { Injectable } from "@angular/core";
@Injectable()
export class LocalStorageService {

  take(key: string): string {
    return localStorage.getItem(key);
  }

  store(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  clear(key: string) {
    localStorage.removeItem(key);
  }
}
