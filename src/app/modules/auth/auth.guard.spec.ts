import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TokenService } from '../services/token.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let tokenService: jasmine.SpyObj<TokenService>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        TokenService
      ]
    });
    authGuard = TestBed.get(AuthGuard);
    tokenService = TestBed.get(TokenService);
    router = TestBed.get(Router);
  });

  it('should create the auth guard', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should redirect to login page when not logged', () => {
    const navigateSpy = spyOn(router, 'navigate');
    tokenService.isLogged = false;
    const isActivated = authGuard.canActivate(null, null);
    expect(isActivated).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

  it('should return true when logged', () => {
    const navigateSpy = spyOn(router, 'navigate');
    tokenService.isLogged = true;
    const isActivated = authGuard.canActivate(null, null);
    expect(isActivated).toBeTruthy();
    expect(navigateSpy).not.toHaveBeenCalled();
  });
});
