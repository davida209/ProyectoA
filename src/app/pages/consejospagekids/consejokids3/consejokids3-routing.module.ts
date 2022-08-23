import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consejokids3Page } from './consejokids3.page';

const routes: Routes = [
  {
    path: '',
    component: Consejokids3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consejokids3PageRoutingModule {}
