import {NgModule} from '@angular/core';
import {LoggedGuard} from './logged.guard';

@NgModule({
  providers: [LoggedGuard]
})
export class LoggedModule {}
