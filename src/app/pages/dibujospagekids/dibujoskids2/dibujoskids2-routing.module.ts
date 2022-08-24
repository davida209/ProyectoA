import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dibujoskids2Page } from './dibujoskids2.page';

const routes: Routes = [
  {
    path: '',
    component: Dibujoskids2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dibujoskids2PageRoutingModule {}
