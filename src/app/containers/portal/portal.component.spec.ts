import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TokenService } from '../../modules/services/token.service';
import { LoggedUserService } from '../../modules/services/logged-user.service';

import { UserDto } from '../../modules/services/users.service';

import { PortalComponent } from './portal.component';

import { ComponentsModule } from '../../components/components.module';


describe('PortalComponent', () => {
  let component: PortalComponent;
  let fixture: ComponentFixture<PortalComponent>;
  let tokenServiceSpy: jasmine.SpyObj<TokenService>;
  let router: Router;
  let loggedUserServiceSpy: jasmine.SpyObj<LoggedUserService>;
  const tokenSpy = jasmine.createSpyObj('TokenService', ['clearToken']);
  const loggedUserSpy = jasmine.createSpyObj('LoggedUserService', ['getLoggedUser', 'clearLoggedUser']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        RouterTestingModule
      ],
      declarations: [PortalComponent],
      providers: [
        { provide: TokenService, useValue: tokenSpy },
        { provide: LoggedUserService, useValue: loggedUserSpy }
      ]
    })
      .compileComponents();
    loggedUserServiceSpy = TestBed.get(LoggedUserService);
    tokenServiceSpy = TestBed.get(TokenService);
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalComponent);
    component = fixture.componentInstance;
    const testUser: UserDto =   {
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
    loggedUserServiceSpy.getLoggedUser.and.returnValue(testUser);
    fixture.detectChanges();
  });

  afterEach(() => {
    tokenServiceSpy.clearToken.calls.reset();
    loggedUserServiceSpy.clearLoggedUser.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.logOut();
    expect(tokenServiceSpy.clearToken).toHaveBeenCalled();
    expect(loggedUserServiceSpy.clearLoggedUser).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

  it('should not logout when logout event comes with true logged value', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.logOut();
    expect(tokenServiceSpy.clearToken).not.toHaveBeenCalled();
    expect(loggedUserServiceSpy.clearLoggedUser).not.toHaveBeenCalled();
    expect(navigateSpy).not.toHaveBeenCalled();
  });
});
