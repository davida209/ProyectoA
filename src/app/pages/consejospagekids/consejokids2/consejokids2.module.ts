import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consejokids2PageRoutingModule } from './consejokids2-routing.module';

import { Consejokids2Page } from './consejokids2.page';
import { ComponentsModule } from '../../../components/components.module';
import { Consejo2Page } from '../../consejospage/consejo2/consejo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consejokids2PageRoutingModule,
    ComponentsModule,
    
  ],
  declarations: [Consejokids2Page]
})
export class Consejokids2PageModule {}
