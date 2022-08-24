import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConsejoskidsPageModule } from './pages/consejoskids/consejoskids.module';

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
  {
    path: 'consejoskids',
    loadChildren: () => import('./pages/consejoskids/consejoskids.module').then( m => m.ConsejoskidsPageModule)
  },
  
  {
    path: 'consejokids1',
    loadChildren: () => import('./pages/consejospagekids/consejokids1/consejokids1.module').then( m => m.Consejokids1PageModule)
  },
  {
    path: 'multimediakids',
    loadChildren: () => import('./pages/multimediakids/multimediakids.module').then( m => m.MultimediakidsPageModule)
  },
  {
    path: 'guiaskids',
    loadChildren: () => import('./pages/guiaskids/guiaskids.module').then( m => m.GuiaskidsPageModule)
  },
  {
    path: 'guiaskids1',
    loadChildren: () => import('./pages/guiaspagekids/guiaskids1/guiaskids1.module').then( m => m.Guiaskids1PageModule)
  },
  {
    path: 'dibujoskids',
    loadChildren: () => import('./pages/dibujoskids/dibujoskids.module').then( m => m.DibujoskidsPageModule)
  },
  {
    path: 'dibujoskids1',
    loadChildren: () => import('./pages/dibujospagekids/dibujoskids1/dibujoskids1.module').then( m => m.Dibujoskids1PageModule)
  },
  {
    path: 'consejokids2',
    loadChildren: () => import('./pages/consejospagekids/consejokids2/consejokids2.module').then( m => m.Consejokids2PageModule)
  },
  {
    path: 'consejokids3',
    loadChildren: () => import('./pages/consejospagekids/consejokids3/consejokids3.module').then( m => m.Consejokids3PageModule)
  },
  {
    path: 'consejokids4',
    loadChildren: () => import('./pages/consejospagekids/consejokids4/consejokids4.module').then( m => m.Consejokids4PageModule)
  },
  {
    path: 'guiaskids2',
    loadChildren: () => import('./pages/guiaspagekids/guiaskids2/guiaskids2.module').then( m => m.Guiaskids2PageModule)
  },
  {
    path: 'guiaskids3',
    loadChildren: () => import('./pages/guiaspagekids/guiaskids3/guiaskids3.module').then( m => m.Guiaskids3PageModule)
  },
  {
    path: 'dibujoskids2',
    loadChildren: () => import('./pages/dibujospagekids/dibujoskids2/dibujoskids2.module').then( m => m.Dibujoskids2PageModule)
  },
  {
    path: 'dibujoskids3',
    loadChildren: () => import('./pages/dibujospagekids/dibujoskids3/dibujoskids3.module').then( m => m.Dibujoskids3PageModule)
  },










  




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
