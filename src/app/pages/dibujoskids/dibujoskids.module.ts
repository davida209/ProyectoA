import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DibujoskidsPageRoutingModule } from './dibujoskids-routing.module';

import { DibujoskidsPage } from './dibujoskids.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DibujoskidsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DibujoskidsPage]
})
export class DibujoskidsPageModule {}
