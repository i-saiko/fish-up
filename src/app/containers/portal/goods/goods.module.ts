import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {GoodsComponent} from './goods.component';
import {ComponentsModule} from '../../../components/components.module';
import {GoodsRouting} from './goods.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {EditGoodsDialogModule} from './edit-goods-dialog/edit-goods-dialog.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {DataTableModule} from '../../../components/data-table/data-table.module';

@NgModule({
  declarations: [GoodsComponent],
  exports: [GoodsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    GoodsRouting,
    FormsModule,
    FlexModule,
    ReactiveFormsModule,
    EditGoodsDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    DataTableModule,
  ],
  providers: [DatePipe]
})
export class GoodsModule {
}
