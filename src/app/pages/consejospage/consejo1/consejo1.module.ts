import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Consejo1PageRoutingModule } from './consejo1-routing.module';

import { Consejo1Page } from './consejo1.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Consejo1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Consejo1Page]
})
export class Consejo1PageModule {}
