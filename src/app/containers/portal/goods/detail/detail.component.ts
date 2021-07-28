import {Component, OnInit} from '@angular/core';
import {UserDto, UsersService} from '../../../../modules/services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  user: Observable<UserDto> | undefined;
  updateUser: UserDto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit() {
    const userId = Number(this.route.snapshot.params.id);
    this.user = this.userService.getUser(userId);
  }

  public toDate(value: string): Date {
    return new Date(value);
  }

  public saveUser(user: UserDto) {
    console.log(user);
    this.userService.putUser(user)
      .subscribe();
    this.router.navigate(['portal']);
  }
}
