import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dibujoskids2PageRoutingModule } from './dibujoskids2-routing.module';

import { Dibujoskids2Page } from './dibujoskids2.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dibujoskids2PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Dibujoskids2Page]
})
export class Dibujoskids2PageModule {}
