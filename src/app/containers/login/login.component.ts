import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../modules/services/authorization.service';
import {ToastrService} from 'ngx-toastr';
import {NgAuthService} from '../../modules/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(
    public ngAuthService: NgAuthService,
  ) {}

  logIn(login: string[]) {
    this.ngAuthService.SignIn(login[0], login[1]);
  }
}
