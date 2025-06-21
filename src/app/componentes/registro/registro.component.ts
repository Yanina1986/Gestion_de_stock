import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Persona } from '../../Clases/persona';
import { FormBuilder, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, NgIf],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {

   constructor (public router: ActivatedRoute){
    
      this.router.paramMap.subscribe(
        t => {
          this.indexPersona = <number>(t.get("indexPersona") ?? -1);
          if (this.indexPersona > -1) {
            let usuarios: Array<Persona> = JSON.parse(localStorage.getItem('usuarios') ?? "[]");
            this.usuario = usuarios[this.indexPersona];
          }
        }
      );
    }
    public usuario: Persona = new Persona();
  
  
    public indexPersona: number = -1;
    public password!: string;
  
    public tipo: string = "password";
  
    public registrarUsuario() {
      if (this.usuario.password != this.password) {
        alert("Error la contraseña no coincide");
        return;
      }
  
      let usuarios: Array<Persona> = JSON.parse(localStorage.getItem('usuarios') ?? "[]");
  
      if (usuarios.some(u => u.usuario == this.usuario.usuario)) {
        alert("El usuario ya existe");
        return;
      }
      usuarios.push(this.usuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
  
    public mostrarPass() {
      if (this.tipo == "password")
        this.tipo = "text";
      else
        this.tipo = "password";
  
    }
    public modificarUsuario() {
      let usuarios: Array<Persona> = JSON.parse(localStorage.getItem('usuarios') ?? "[]");
  
      let usuarioAModificar = usuarios.filter(u => u.usuario == this.usuario.usuario)[0];
      usuarioAModificar.apellido = this.usuario.apellido;
      usuarioAModificar.nombre = this.usuario.nombre;
      usuarioAModificar.password = this.usuario.password;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
    }
}
   

