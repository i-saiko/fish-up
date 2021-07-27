import { UserDto } from './users.service';

export class LoggedUserService {
  loggedUser: UserDto | null;
  private readonly loggedUserKey = 'loggedUser';

  constructor() {
    this.loggedUser = this.getLoggedUser();
  }

  getLoggedUser(): UserDto {
    return JSON.parse(localStorage.getItem(this.loggedUserKey), this.reviver);
  }

  setLoggedUser(user: UserDto) {
    this.loggedUser = user;
    localStorage.setItem(this.loggedUserKey, JSON.stringify(this.loggedUser));
  }

  clearLoggedUser() {
    this.loggedUser = null;
    localStorage.removeItem(this.loggedUserKey);
  }

  private reviver(key, value) {
    if (typeof value === 'string' && !isNaN(Date.parse(value))) {
      return new Date(value);
    }

    return value;
  }
}
