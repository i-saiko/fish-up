import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {UserDto} from '../../modules/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userinfo',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  @Input() isLoggedIn: boolean;
  @Input() user: Observable<UserDto> | undefined;

  @Output() saveUser = new EventEmitter<UserDto>();

  saveInfo(user: UserDto) {
    this.saveUser.emit(user);
  }
}
