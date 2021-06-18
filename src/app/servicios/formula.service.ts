import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  backend = environment.backend+"/usuario";

  constructor( private http: HttpClient) { }

  registroformulario(datos_formulario){
    return this.http.post(`${this.backend}/crear-usuario`,datos_formulario);
  }
  obtenerDatosFormulario(){
    return this.http.get(`${this.backend}/obtener-usuarios`);
  }


}
