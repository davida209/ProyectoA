import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consejokids3PageRoutingModule } from './consejokids3-routing.module';

import { Consejokids3Page } from './consejokids3.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consejokids3PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Consejokids3Page]
})
export class Consejokids3PageModule {}
