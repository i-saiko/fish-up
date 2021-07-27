import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: ':id/detail',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRouting {
}

