import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let tokenService: TokenService;
  let tokenStore = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenService]
    });
    tokenService = TestBed.get(TokenService);
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in tokenStore ? tokenStore[key] : null;
      },
      setItem: (key: string, value: string) => {
        tokenStore[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete tokenStore[key];
      }
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
  });

  afterEach(() => {
    tokenStore = {};
  });

  it('should create the service', () => {
    expect(tokenService).toBeTruthy();
  });

  describe('setToken', () => {
    it('should store the token in localStorage', () => {
      tokenService.setToken('testTokenValue');
      expect(localStorage.getItem('token')).toEqual('testTokenValue');
    });
  });

  describe('getToken', () => {
    it('should return stored token from localStorage', () => {
      localStorage.setItem('token', 'testTokenValue');
      expect(tokenService.getToken()).toEqual('testTokenValue');
    });
  });

  describe('isTokenExist', () => {
    it('should false if token does not exist', () => {
      expect(tokenService.isTokenExist()).toBeFalsy();
    });

    it('should true if token exist', () => {
      localStorage.setItem('token', 'testTokenValue');
      expect(tokenService.isTokenExist()).toBeTruthy();
    });
  });

  describe('clearToken', () => {
    it('should remove token from localStorage', () => {
      localStorage.setItem('token', 'testTokenValue');
      tokenService.clearToken();
      expect(tokenService.isTokenExist()).toBeFalsy();
    });
  });
});
