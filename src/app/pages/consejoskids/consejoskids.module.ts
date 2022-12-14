import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsejoskidsPageRoutingModule } from './consejoskids-routing.module';

import { ConsejoskidsPage } from './consejoskids.page';
import { AppRoutingModule } from '../../app-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { ConsejosPage } from '../consejos/consejos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsejoskidsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ConsejoskidsPage]
})
export class ConsejoskidsPageModule {}
