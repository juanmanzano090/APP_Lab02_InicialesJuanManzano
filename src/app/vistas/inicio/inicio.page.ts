import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

componentes: Componente[] = [
  {
    icon: 'person-add',
    name: 'Registrar Usuarios',
    direccion: '/registro-de-usuario'

  },
  {
    icon: 'list',
    name: 'Usuarios',
    direccion: '/listar-usuarios'

  },
  {
    icon: 'logo-usd',
    name: 'Registrar Egresos',
    direccion: '/registro-de-egresos'

  },
  {
    icon: 'trending-up',
    name: 'Egresos de Usuarios',
    direccion: '/listar-egresos'

  }
];



  constructor() { }


  ngOnInit() {
  }

}
interface Componente {
  icon: string;
  name: string;
  direccion: string;
}
