import {Injectable} from '@angular/core';
import {LocalStorageService} from './localstorage.service';
import {RestService} from '../../rest/rest.service';
import {UserDto} from './users.service';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

interface LoginData {
  email: string;
  password: string;
}

@Injectable()
export class AuthorizationService {
  private tokenStore = 'token';
  private keyName = 'userName';
  private endPoint = 'http://localhost:3000/';
  public isLogged = false;
  private currentUserSubject: BehaviorSubject<UserDto>;
  public currentUser: Observable<UserDto>;

  constructor(
    private storageService: LocalStorageService,
    private rest: RestService,
    private router: Router
  ) {
    this.isLogged = this.isAuthorizated();
    this.currentUserSubject = new BehaviorSubject<UserDto>(this.getAuthorizedUser());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  isAuthorizated(): boolean {
    return !!this.storageService.take(this.tokenStore);
  }

  getAuthorization(): string | undefined {
    return this.storageService.take(this.tokenStore);
  }

  saveAuthorization(account: string) {
    this.storageService.store(this.tokenStore, account);
  }

  resetAuthorization() {
    this.storageService.clear(this.tokenStore);
  }

  getCurrentUserValue(): UserDto {
    return this.currentUserSubject.value;
  }

  getAuthorizedUser(): UserDto {
    return JSON.parse(this.storageService.take(this.keyName));
  }

  saveAuthorizedUser(user: UserDto) {
    this.storageService.store(this.keyName, JSON.stringify(user));
  }

  clearAuthorizedUser() {
    this.storageService.clear(this.keyName);
  }

  login(credential: LoginData) {
    return this.rest.http.post<{ user: UserDto, accessToken: string }>(`${this.endPoint}api/auth`, credential)
      .pipe(res => this.rest.handleResponse(res, {
          400: 'Invalid email or password'
        }),
        map(res => {
          const {user, accessToken} = res;
          if (accessToken && user) {
            this.saveAuthorization(accessToken);
            this.saveAuthorizedUser(user);
            this.isLogged = true;
          }
        }));
  }

  logout() {
    this.resetAuthorization();
    this.isLogged = false;
    this.clearAuthorizedUser();
    this.router.navigate(['']);
  }
}
