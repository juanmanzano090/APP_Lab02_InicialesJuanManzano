
import { Component, OnInit } from '@angular/core';
import { FormulaService } from '../../servicios/formula.service';

export class EnviarId{
  constructor(
    public id_usuario,
  ){}
}


@Component({
  selector: 'app-egresos-usuario',
  templateUrl: './egresos-usuario.page.html',
  styleUrls: ['./egresos-usuario.page.scss'],
})
export class EgresosUsuarioPage implements OnInit {

  

  constructor(private formulaService : FormulaService) {
    this.datos_id = new EnviarId("")
  }

  datos_obtenidos;
  datos_egresos;
  datos_id;

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.obtenerDatosUsuario();

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

    enviarId(){
      
    this.formulaService.usuarioEgreso(this.datos_id).subscribe(
      (response:any)=> {
        this.datos_egresos = response.egresos_usuario;
        console.log(this.datos_egresos)
      },
      error=>{
        alert("error en la peticion");
       }
      );

}
  
}
