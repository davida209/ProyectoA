import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guiaskids3Page } from './guiaskids3.page';

const routes: Routes = [
  {
    path: '',
    component: Guiaskids3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guiaskids3PageRoutingModule {}
