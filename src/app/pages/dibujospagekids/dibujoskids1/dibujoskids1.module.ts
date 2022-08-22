import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dibujoskids1PageRoutingModule } from './dibujoskids1-routing.module';

import { Dibujoskids1Page } from './dibujoskids1.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dibujoskids1PageRoutingModule, 
    ComponentsModule,
  ],
  declarations: [Dibujoskids1Page]
})
export class Dibujoskids1PageModule {}
