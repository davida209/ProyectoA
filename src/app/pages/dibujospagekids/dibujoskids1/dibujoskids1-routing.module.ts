import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dibujoskids1Page } from './dibujoskids1.page';

const routes: Routes = [
  {
    path: '',
    component: Dibujoskids1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dibujoskids1PageRoutingModule {}
