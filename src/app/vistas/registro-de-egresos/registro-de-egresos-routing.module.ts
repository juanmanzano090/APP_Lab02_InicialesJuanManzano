import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDeEgresosPage } from './registro-de-egresos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDeEgresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDeEgresosPageRoutingModule {}
