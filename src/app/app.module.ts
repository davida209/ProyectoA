import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

import { VideoPlayer } from '@ionic-native/video-player/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [

    VideoPlayer,

    { 
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy,
    
    
   }],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
