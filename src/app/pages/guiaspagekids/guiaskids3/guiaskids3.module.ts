import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guiaskids3PageRoutingModule } from './guiaskids3-routing.module';

import { Guiaskids3Page } from './guiaskids3.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guiaskids3PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Guiaskids3Page]
})
export class Guiaskids3PageModule {}
