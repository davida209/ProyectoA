import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsejoskidsPageRoutingModule } from './consejoskids-routing.module';

import { ConsejoskidsPage } from './consejoskids.page';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsejoskidsPageRoutingModule,
  ],
  declarations: [ConsejoskidsPage]
})
export class ConsejoskidsPageModule {}
