import { Component, OnInit } from '@angular/core';
import { Elemento } from '../models/Elemento';
//import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-lista-elementos',
  templateUrl: './lista-elementos.component.html',
  styleUrls: ['./lista-elementos.component.css']
})
export class ListaElementosComponent {

  elementos: Elemento[] = [
    {id: 1, nombre: 'Elemento 1', seleccionado: false},
    {id: 2, nombre: 'Elemento 2', seleccionado: false},
    {id: 3, nombre: 'Elemento 3', seleccionado: false},

  ];

  toggleSeleccion(id: number): void {
    const elemento = this.elementos.find(e => e.id === id);
    if(elemento){
      elemento.seleccionado = !elemento.seleccionado;
    }
  }
  // //"@angular/common": "^16.0.0", Esto va en packge.json  ^17.0.0
}
