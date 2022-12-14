import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidsPageRoutingModule } from './kids-routing.module';

import { KidsPage } from './kids.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ConsejoskidsPageModule } from '../consejoskids/consejoskids.module';
import { MultimediaPageModule } from '../multimedia/multimedia.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidsPageRoutingModule,
    ComponentsModule,
    ConsejoskidsPageModule,
    MultimediaPageModule,
    
  ],
  declarations: [KidsPage]
})
export class KidsPageModule {}
