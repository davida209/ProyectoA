import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guiaskids1Page } from './guiaskids1.page';

const routes: Routes = [
  {
    path: '',
    component: Guiaskids1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guiaskids1PageRoutingModule {}
