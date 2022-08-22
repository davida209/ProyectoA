import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultimediakidsPage } from './multimediakids.page';

const routes: Routes = [
  {
    path: '',
    component: MultimediakidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultimediakidsPageRoutingModule {}
