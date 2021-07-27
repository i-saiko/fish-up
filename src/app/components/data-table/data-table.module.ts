import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';

import {DataTableComponent} from './data-table.component';
import {RouterModule} from '@angular/router';

import {PipesModule} from '../../modules/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [DataTableComponent],
  exports: [DataTableComponent]
})
export class DataTableModule {
}
