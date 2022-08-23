import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consejokids2Page } from './consejokids2.page';

const routes: Routes = [
  {
    path: '',
    component: Consejokids2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consejokids2PageRoutingModule {}
