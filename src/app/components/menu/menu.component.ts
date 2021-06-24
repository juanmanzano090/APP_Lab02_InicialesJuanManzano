import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormulaService } from '../../servicios/formula.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente>
    

  constructor(private formulaService : FormulaService) { }

  ngOnInit() {
    this.componentes = this.formulaService.obtenerOpts();
  }

}
interface Componente {
  icon: string;
  name: string;
  direccion: string;
}
