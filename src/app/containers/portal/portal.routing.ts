import {RouterModule, Routes} from '@angular/router';
import {PortalComponent} from './portal.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: 'goods',
        loadChildren: () => import('./goods/goods.module').then(m => m.GoodsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRouting {}
