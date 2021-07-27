import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../rest/rest.service';

export interface UserDto {
  id: number;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  creditCard: string;
  bornDate: Date;
  phone: string;
  position: string;
  framework: string;
}

@Injectable()
export class UsersService {
  endPoint = 'http://localhost:3000/';

  constructor(private rest: RestService) {}

  getUsers(): Observable<UserDto[]> {
    return this.rest.http.get<UserDto[]>(`${this.endPoint}api/users`);
  }

  getUser(id: number): Observable<UserDto> {
    return this.rest.http.get<UserDto>(`${this.endPoint}api/users/${id}`);
  }

  putUser(user: UserDto) {
    const { id } = user;
    return this.rest.http.put<UserDto>(`${this.endPoint}api/users/${id}`, user)
      .pipe(res => this.rest.handleResponse(res, {
          200: 'User info was successfully updated'
        })
      );
  }
}
