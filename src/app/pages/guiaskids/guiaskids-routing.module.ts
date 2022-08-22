import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiaskidsPage } from './guiaskids.page';

const routes: Routes = [
  {
    path: '',
    component: GuiaskidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiaskidsPageRoutingModule {}
