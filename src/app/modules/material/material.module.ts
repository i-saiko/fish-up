import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule, MatRippleModule} from '@angular/material/core';
// import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

const matModules: CommonModule[] = [
  MatMenuModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatTabsModule,
  MatSortModule,
  MatChipsModule,
  MatInputModule,
  MatTableModule,
  MatBadgeModule,
  MatRadioModule,
  MatRippleModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatGridListModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatButtonToggleModule
];

@NgModule({
  imports: [matModules],
  exports: [matModules],
  providers: [
    // {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    // },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    }
  ]
})
export class MaterialModule {
}
