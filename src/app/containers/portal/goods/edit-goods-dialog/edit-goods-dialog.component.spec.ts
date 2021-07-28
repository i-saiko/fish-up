import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EditGoodsDialogComponent} from './edit-goods-dialog.component';
import {UserDto, UsersService} from '../../../../modules/services/users.service';
import {Observable, of} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('EditGoodsDialogComponent', () => {
  let component: EditGoodsDialogComponent;
  let fixture: ComponentFixture<EditGoodsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditGoodsDialogComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
        CustomFormsModule
      ],
      providers: [{
        provide: UsersService, useValue: userServiceSpy
      },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                id: 34324
              }
            }
          }
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGoodsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const userServiceSpy =
    jasmine.createSpyObj('UsersService', ['getUser']);

  const expectedUser: UserDto = {
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
  };
  const observableUser: Observable<UserDto> = of(expectedUser);
  userServiceSpy.getUser.and.returnValue(observableUser);
});
