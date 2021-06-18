import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEgresosPageRoutingModule } from './listar-egresos-routing.module';

import { ListarEgresosPage } from './listar-egresos.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListarEgresosPageRoutingModule
  ],
  declarations: [ListarEgresosPage]
})
export class ListarEgresosPageModule {}
