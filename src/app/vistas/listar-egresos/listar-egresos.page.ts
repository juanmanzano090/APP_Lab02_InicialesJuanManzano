import { Component, OnInit } from '@angular/core';
import { FormulaService } from '../../servicios/formula.service';

@Component({
  selector: 'app-listar-egresos',
  templateUrl: './listar-egresos.page.html',
  styleUrls: ['./listar-egresos.page.scss'],
})
export class ListarEgresosPage implements OnInit {

  constructor(private formulaService : FormulaService) { }
  datos_obtenidos;


  ngOnInit() {
  }

  ionViewWillEnter(){
    this.obtenerEgreso();
  }

  obtenerEgreso(){
  this.formulaService.obtenerEgreso().subscribe(
    (response:any)=> {
      this.datos_obtenidos = response.egresos;
      console.log(this.datos_obtenidos)
    },
    error=>{
      alert("error en la peticion");
     }
    );
  } 
}
