import {NgModule} from '@angular/core';
import {DetailComponent} from './detail.component';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../../../components/components.module';
import {DetailRouting} from './detail.routing';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';

@NgModule({
  declarations: [DetailComponent],
  exports: [DetailComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    DetailRouting,
    FormsModule,
    CustomFormsModule
  ]
})
export class DetailModule {}
