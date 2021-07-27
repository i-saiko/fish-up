import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from './filter/filter.pipe';
import { DefaultValuePipe } from './default-value.pipe';
import { NormalizeEnumPipe } from './normalize-enum-pipe';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    FilterPipe,
    DefaultValuePipe,
    NormalizeEnumPipe
  ],
  exports: [
    FilterPipe,
    DefaultValuePipe,
    NormalizeEnumPipe
  ]
})
export class PipesModule {}
