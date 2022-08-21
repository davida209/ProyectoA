import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Consejo2Page } from './consejo2.page';

const routes: Routes = [
  {
    path: '',
    component: Consejo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Consejo2PageRoutingModule {}
