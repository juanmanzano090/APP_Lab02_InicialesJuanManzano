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
    loadChildren: () => import('./vistas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-de-usuario',
    loadChildren: () => import('./vistas/registro-de-usuario/registro-de-usuario.module').then( m => m.RegistroDeUsuarioPageModule)
  },
  {
    path: 'registro-de-egresos',
    loadChildren: () => import('./vistas/registro-de-egresos/registro-de-egresos.module').then( m => m.RegistroDeEgresosPageModule)
  },
  {
    path: 'listar-usuarios',
    loadChildren: () => import('./vistas/listar-usuarios/listar-usuarios.module').then( m => m.ListarUsuariosPageModule)
  },
  {
    path: 'listar-egresos',
    loadChildren: () => import('./vistas/listar-egresos/listar-egresos.module').then( m => m.ListarEgresosPageModule)
  },
  {
    path: 'egresos-usuario',
    loadChildren: () => import('./vistas/egresos-usuario/egresos-usuario.module').then( m => m.EgresosUsuarioPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
