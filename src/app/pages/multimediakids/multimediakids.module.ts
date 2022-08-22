import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultimediakidsPageRoutingModule } from './multimediakids-routing.module';

import { MultimediakidsPage } from './multimediakids.page';
import { AppModule } from 'src/app/app.module';
import { ComponentsModule } from '../../components/components.module';
import { KidsPageModule } from '../kids/kids.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultimediakidsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MultimediakidsPage]
})
export class MultimediakidsPageModule {}
