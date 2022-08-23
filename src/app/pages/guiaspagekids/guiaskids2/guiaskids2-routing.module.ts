import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guiaskids2Page } from './guiaskids2.page';

const routes: Routes = [
  {
    path: '',
    component: Guiaskids2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guiaskids2PageRoutingModule {}
