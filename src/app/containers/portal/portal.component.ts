import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../modules/services/authorization.service';
import {NgAuthService} from '../../modules/services/auth.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent {
  userName: string = sessionStorage.getItem('userName');
  isLoggedIn = true;

  sideBarElements: string[] = [
    'Приход',
    'Расход',
    'Контрагенты',
    'Места хранения',
  ];

  classes: string[] = [
    'exit_to_app',
    'local_shipping',
    'supervised_user_circle',
    'home_work',
  ];

  reportsSaved: string[] = [
    'Current month',
    'Last quarter',
    'Social engagement',
    'Year-end sale',
  ];

  constructor(
    private router: Router,
    private ngAuthService: NgAuthService,
  ) {}

  logOut() {
    this.ngAuthService.SignOut();
    this.isLoggedIn = this.ngAuthService.isLoggedIn;
  }
}
