import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../components/components.module';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {LoginRouting} from './login.routing';
import {CustomFormsModule} from 'ng2-validation';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    LoginRouting,
  ],
  exports: [
    LoginComponent
  ],
})
export class LoginModule {}
