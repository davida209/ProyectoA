import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consejo1Page } from './consejo1.page';

const routes: Routes = [
  {
    path: '',
    component: Consejo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consejo1PageRoutingModule {}
