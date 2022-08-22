import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consejokids1PageRoutingModule } from './consejokids1-routing.module';

import { Consejokids1Page } from './consejokids1.page';
import { ComponentsModule } from '../../../components/components.module';
import { Consejo1PageModule } from '../../consejospage/consejo1/consejo1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consejokids1PageRoutingModule,
    ComponentsModule,
    Consejo1PageModule,
  ],
  declarations: [Consejokids1Page]
})
export class Consejokids1PageModule {}
