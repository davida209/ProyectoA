import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultimediaPageRoutingModule } from './multimedia-routing.module';

import { MultimediaPage } from './multimedia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultimediaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MultimediaPage]
})
export class MultimediaPageModule {}
