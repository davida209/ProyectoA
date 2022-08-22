import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guiaskids1PageRoutingModule } from './guiaskids1-routing.module';

import { Guiaskids1Page } from './guiaskids1.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guiaskids1PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Guiaskids1Page]
})
export class Guiaskids1PageModule {}
