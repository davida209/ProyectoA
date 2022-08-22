import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiaskidsPageRoutingModule } from './guiaskids-routing.module';

import { GuiaskidsPage } from './guiaskids.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiaskidsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [GuiaskidsPage]
})
export class GuiaskidsPageModule {}
