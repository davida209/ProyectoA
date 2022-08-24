import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dibujoskids3PageRoutingModule } from './dibujoskids3-routing.module';

import { Dibujoskids3Page } from './dibujoskids3.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dibujoskids3PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Dibujoskids3Page]
})
export class Dibujoskids3PageModule {}
