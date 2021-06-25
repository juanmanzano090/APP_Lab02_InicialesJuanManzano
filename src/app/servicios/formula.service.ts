import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Componente } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  backend = environment.backend+"/usuario";
  backend1 = environment.backend+"/egreso";

  constructor( private http: HttpClient) { }

  registrousuario(datos_usuario){
    return this.http.post(`${this.backend}/crear-usuario`,datos_usuario);
  }
  obtenerDatosUsuario(){
    return this.http.get(`${this.backend}/obtener-usuarios`);
  }
  crearEgreso(datos_egreso){
    return this.http.post(`${this.backend1}/crear-egreso`,datos_egreso);
  }
  obtenerEgreso(){
    return this.http.get(`${this.backend1}/obtener-egresos`);
  }
  obtenerOpts(){
    return this.http.get<Componente>(`/assets/data/menu.json`);
  }
  usuarioEgreso(id){
    return this.http.get(`${this.backend1}/obtener-egresos-usuario/${id}`);
  }

}