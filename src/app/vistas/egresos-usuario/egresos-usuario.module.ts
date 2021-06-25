import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EgresosUsuarioPageRoutingModule } from './egresos-usuario-routing.module';

import { EgresosUsuarioPage } from './egresos-usuario.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EgresosUsuarioPageRoutingModule
  ],
  declarations: [EgresosUsuarioPage]
})
export class EgresosUsuarioPageModule {}
