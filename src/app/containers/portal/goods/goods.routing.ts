import {RouterModule, Routes} from '@angular/router';
import {GoodsComponent} from './goods.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: GoodsComponent
  },
  {
    path: 'goods',
    component: GoodsComponent
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
export class GoodsRouting {
}

