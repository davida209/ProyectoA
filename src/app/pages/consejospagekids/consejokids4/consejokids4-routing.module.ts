import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consejokids4Page } from './consejokids4.page';

const routes: Routes = [
  {
    path: '',
    component: Consejokids4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consejokids4PageRoutingModule {}
