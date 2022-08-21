import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'padres',
    loadChildren: () => import('./pages/padres/padres.module').then( m => m.PadresPageModule)
  },
  {
    path: 'kids',
    loadChildren: () => import('./pages/kids/kids.module').then( m => m.KidsPageModule)
  },
  {
    path: 'consejos',
    loadChildren: () => import('./pages/consejos/consejos.module').then( m => m.ConsejosPageModule)
  },
  {
    path: 'preguntas',
    loadChildren: () => import('./pages/preguntas/preguntas.module').then( m => m.PreguntasPageModule)
  },
  {
    path: 'multimedia',
    loadChildren: () => import('./pages/multimedia/multimedia.module').then( m => m.MultimediaPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'consejo1',
    loadChildren: () => import('./pages/consejospage/consejo1/consejo1.module').then( m => m.Consejo1PageModule)
  },
  {
    path: 'consejo2',
    loadChildren: () => import('./pages/consejospage/consejo2/consejo2.module').then( m => m.Consejo2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
