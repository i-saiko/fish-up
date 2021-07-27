import {
  Component, Inject,
  OnInit
} from '@angular/core';
import {Observable} from 'rxjs';
import {UserDto, UsersService} from '../../../modules/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userList: Observable<UserDto[]>;
  activePage = 0;
  // tableHeaders = [
  //   'id',
  //   'name',
  //   'position',
  //   'email',
  //   'phone'
  // ];
  //
  constructor(
    // private httpService: UsersService
  ) {}

  //
  // ngOnInit() {
  //   this.userList = this.httpService.getUsers();
  // }
  //
  // displayActivePage(activePageNumber: number) {
  //   this.activePage = activePageNumber;
  // }
}
