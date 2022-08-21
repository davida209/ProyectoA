import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consejo2PageRoutingModule } from './consejo2-routing.module';

import { Consejo2Page } from './consejo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consejo2PageRoutingModule
  ],
  declarations: [Consejo2Page]
})
export class Consejo2PageModule {}
