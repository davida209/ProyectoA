import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsejoskidsPage } from './consejoskids.page';

const routes: Routes = [
  {
    path: '',
    component: ConsejoskidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsejoskidsPageRoutingModule {}
