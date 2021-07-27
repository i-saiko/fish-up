import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {ComponentsModule} from '../../../components/components.module';
import {UsersRouting} from './users.routing';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    UsersRouting,
    FormsModule,
  ],
})
export class UsersModule {
}
