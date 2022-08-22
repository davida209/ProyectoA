import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consejokids1Page } from './consejokids1.page';

const routes: Routes = [
  {
    path: '',
    component: Consejokids1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consejokids1PageRoutingModule {}
