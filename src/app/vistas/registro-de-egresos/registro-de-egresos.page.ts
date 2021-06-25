import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormulaService } from '../../servicios/formula.service';

export class EnviarEgreso{
  constructor(
    public descripcion: string,
    public precio: number,
    public id_usuario: string,
  ){}
}

@Component({
  selector: 'app-registro-de-egresos',
  templateUrl: './registro-de-egresos.page.html',
  styleUrls: ['./registro-de-egresos.page.scss'],
})
export class RegistroDeEgresosPage implements OnInit {

  
  constructor(private formulaService : FormulaService, private router:Router ) {
    this.datos_egreso = new EnviarEgreso("",0,"") }
  datos_egreso;
  datos_obtenidos;
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.obtenerDatosUsuario();
  }
  enviarEgreso(){


    this.formulaService.crearEgreso(this.datos_egreso).subscribe(
      (response:any)=>{
        if(response.egreso){
          this.router.navigateByUrl('/inicio') 
          console.log("registrado correctamente")
         
        }else{
          alert("datos no registrados")
        }
      },
      error=>{
        alert("error de registrar datos")
      }
    )

    console.log("Datos del formulario: ", this.datos_egreso);
  }

  obtenerDatosUsuario(){
    this.formulaService.obtenerDatosUsuario().subscribe(
      (response:any)=> {
        this.datos_obtenidos = response.usuarios;
        console.log(this.datos_obtenidos)
      },
      error=>{
        alert("error en la peticion");
       }
      );
    } 

}
