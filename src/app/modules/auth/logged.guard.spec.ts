import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TokenService } from '../services/token.service';

import { LoggedGuard } from './logged.guard';

describe('LoggedGuard', () => {
  let noAuthGuard: LoggedGuard;
  let tokenService: jasmine.SpyObj<TokenService>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        LoggedGuard,
        TokenService
      ]
    });
    noAuthGuard = TestBed.get(LoggedGuard);
    tokenService = TestBed.get(TokenService);
    router = TestBed.get(Router);
  });

  it('should create the no-auth guard', () => {
    expect(noAuthGuard).toBeTruthy();
  });

  it('should redirect to portal page when logged', () => {
    const navigateSpy = spyOn(router, 'navigate');
    tokenService.isLogged = true;
    const isActivated = noAuthGuard.canActivate(null, null);
    expect(isActivated).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['portal']);
  });

  it('should return true when not logged', () => {
    const navigateSpy = spyOn(router, 'navigate');
    tokenService.isLogged = false;
    const isActivated = noAuthGuard.canActivate(null, null);
    expect(isActivated).toBeTruthy();
    expect(navigateSpy).not.toHaveBeenCalled();
  });
});
