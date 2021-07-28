import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {SubmenuDirective} from './header/submenu.directive';
import {FormComponent} from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {TableListComponent} from './table/table.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SubmenuDirective,
    FormComponent,
    UserInfoComponent,
    TableListComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        CustomFormsModule,
        ReactiveFormsModule,
        MatCardModule,
        FlexModule,
        MatDividerModule,
        MatIconModule,
    ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FormComponent,
    UserInfoComponent,
    TableListComponent,
  ],
})
export class ComponentsModule {}
