import { Component, OnInit } from '@angular/core';

import { FormulaService } from '../../servicios/formula.service';

export class EnviarDatos{
  constructor(
    public nombre,
    public apellido,
    public rut,
    public correo,
    public password,
  ){}
}

@Component({
  selector: 'app-registro-de-usuario',
  templateUrl: './registro-de-usuario.page.html',
  styleUrls: ['./registro-de-usuario.page.scss'],
})
export class RegistroDeUsuarioPage implements OnInit {
  datos_usuario;
  constructor(private formulaService : FormulaService ) { 
    this.datos_usuario = new EnviarDatos("","","","","")
  }

  ngOnInit() {
  }

  enviarDatos(){


    this.formulaService.registrousuario(this.datos_usuario).subscribe(
      (response:any)=>{
        if(response.usuario){
          alert("datos registrados correctamente")
        }else{
          alert("datos no registrados")
        }
      },
      error=>{
        alert("error de registrar datos")
      }
    )

    console.log("Datos del formulario: ", this.datos_usuario);
  }


}
