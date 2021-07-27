import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import {AuthorizationService} from '../../modules/services/authorization.service';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  const AuthorizationServiceStub: Partial<AuthorizationService> = {
    saveAuthorization: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      providers: [{provide: AuthorizationService, useValue: AuthorizationServiceStub } ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.sideBarElements = ['Test-menu'];
    component.reportsSaved = ['Test-report'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change string', () => {
    component.sideBarElements = ['Dashboard'];
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const link = element.querySelector('a');
    expect(link.textContent).toBe(' Dashboard');
  });

  it('should click to element', () => {
    const element: HTMLElement = fixture.nativeElement;
    const btn = element.querySelector('button');
    btn.click();
    expect(component.itemLimit).toBe(4);
  });


});
