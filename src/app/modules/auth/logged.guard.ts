import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';

@Injectable()
export class LoggedGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthorizationService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthorizated()) {
      this.router.navigate(['/portal']);
      return false;
    }
    return true;
    }
}
