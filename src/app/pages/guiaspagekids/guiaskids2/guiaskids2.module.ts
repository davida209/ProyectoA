import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guiaskids2PageRoutingModule } from './guiaskids2-routing.module';

import { Guiaskids2Page } from './guiaskids2.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guiaskids2PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Guiaskids2Page]
})
export class Guiaskids2PageModule {}
