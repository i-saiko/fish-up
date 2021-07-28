import {NgModule} from '@angular/core';
import {EditGoodsDialogComponent} from './edit-goods-dialog.component';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../../../components/components.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [EditGoodsDialogComponent],
  exports: [EditGoodsDialogComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ]
})
export class EditGoodsDialogModule {
}
