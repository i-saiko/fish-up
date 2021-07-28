import {RouterTestingModule} from '@angular/router/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {of} from 'rxjs';

import {UserDto, UsersService} from '../../../modules/services/users.service';

import {GoodsComponent} from './goods.component';

describe('GoodsComponent', () => {
  let component: GoodsComponent;
  let fixture: ComponentFixture<GoodsComponent>;
  let usersServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(async(() => {
    const usersSpy = jasmine.createSpyObj('UserService', ['getUsers']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [GoodsComponent],
      providers: [
        {provide: UsersService, useValue: usersSpy}
      ]
    })
      .compileComponents();
    usersServiceSpy = TestBed.get(UsersService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsComponent);
    component = fixture.componentInstance;
    const testUsers: UserDto[] = [
      {
        id: 3,
        name: 'Леонід Байда',
        email: 'baida@i.ua',
        password: 'Qwer1@',
        passwordConfirm: 'Qwer1@',
        creditCard: '4242 4242 4242 4242',
        phone: '0634601631',
        position: '',
        bornDate: new Date(),
        framework: 'React'
      }
    ];
    usersServiceSpy.getUsers.and.returnValue(of(testUsers));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
