import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './modules/auth/auth.guard';
import {LoggedGuard} from './modules/auth/logged.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedGuard],
    loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'portal',
    canActivate: [AuthGuard],
    loadChildren: () => import('./containers/portal/portal.module').then(m => m.PortalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
