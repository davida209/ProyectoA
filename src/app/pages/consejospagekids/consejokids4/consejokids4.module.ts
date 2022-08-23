import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consejokids4PageRoutingModule } from './consejokids4-routing.module';

import { Consejokids4Page } from './consejokids4.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consejokids4PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Consejokids4Page]
})
export class Consejokids4PageModule {}
