import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {NgAuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private ngAuthService: NgAuthService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.ngAuthService.isLoggedIn) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
  }
}
