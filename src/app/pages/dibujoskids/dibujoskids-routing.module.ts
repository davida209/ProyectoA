import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DibujoskidsPage } from './dibujoskids.page';

const routes: Routes = [
  {
    path: '',
    component: DibujoskidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DibujoskidsPageRoutingModule {}
