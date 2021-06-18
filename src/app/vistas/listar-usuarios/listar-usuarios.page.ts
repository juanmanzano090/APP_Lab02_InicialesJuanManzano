import { Component, OnInit } from '@angular/core';
import { FormulaService } from '../../servicios/formula.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage implements OnInit {

  constructor(private formulaService : FormulaService) { }
  datos_obtenidos;
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.obtenerDatosFormulario();
  }
  obtenerDatosFormulario(){
  this.formulaService.obtenerDatosFormulario().subscribe(
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
