import { TestBed } from '@angular/core/testing';

import { UserDto } from './users.service';

import { LoggedUserService } from './logged-user.service';

describe('LoggedUserService', () => {
  let loggedUserService: LoggedUserService;
  let loggedUserStore = {};
  const testUser: UserDto = {
    id: 3,
    name: 'Леонід Байда',
    email: 'baida@i.ua',
    password: 'Qwer1@',
    passwordConfirm: 'Qwer1@',
    creditCard: '4242 4242 4242 4242',
    phone: '0634601631',
    position: '',
    bornDate: new Date(),
    framework: 'React'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedUserService]
    });
    loggedUserService = TestBed.get(LoggedUserService);
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in loggedUserStore ? loggedUserStore[key] : null;
      },
      setItem: (key: string, value: string) => {
        loggedUserStore[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete loggedUserStore[key];
      }
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
  });

  afterEach(() => {
    loggedUserStore = {};
  });

  it('should create the service', () => {
    expect(loggedUserService).toBeTruthy();
  });

  describe('setLoggedUser', () => {
    it('should store info about logged user in localStorage', () => {
      loggedUserService.setLoggedUser(testUser);
      expect(localStorage.getItem('loggedUser')).toEqual(JSON.stringify(testUser));
    });
  });

  describe('getLoggedUser', () => {
    it('should return stored info about logged user from localStorage', () => {
      localStorage.setItem('loggedUser', JSON.stringify(testUser));
      expect(loggedUserService.getLoggedUser()).toEqual(testUser);
    });
  });

  describe('clearLoggedUser', () => {
    it('should remove info about logged user from localStorage', () => {
      localStorage.setItem('loggedUser', JSON.stringify(testUser));
      loggedUserService.clearLoggedUser();
      expect(loggedUserService.loggedUser).toBeNull();
    });
  });
});
