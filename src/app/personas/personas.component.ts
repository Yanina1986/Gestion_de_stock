import { Component } from '@angular/core';
import { Persona } from '../Clases/persona';
import { CommonModule,NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-personas',
  imports: [CommonModule,RouterLink],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  public usuarios: Array <Persona> = new Array <Persona>();
  constructor(){
    this.usuarios=JSON.parse(localStorage.getItem('usuarios')?? "[]");
  }

}
