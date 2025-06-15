import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../Clases/persona';
import { Router } from '@angular/router';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  constructor(public router: Router) {  }
   
  public usuario : Persona = new Persona ();

  public loguear() {
    let usuarios: Array<Persona> = JSON.parse(localStorage.getItem('usuarios') ?? "[]");

    if (!usuarios.some(u => u.usuario.toLowerCase()== this.usuario.usuario.toLowerCase()&& u.password == this.usuario.password
  )){
     alert ("Error");
      return;
    }
    this.router.navigateByUrl("suamdor");
  }
  public mostrarPass(){

    if (this.tipo == "password")
      this.tipo = "text";
    else 
    this.tipo ="password";
  
  }
  public mensaje: string = "Bienvenidos";
  public password: string = "";
  public tipo: string = "password";

  public aceptar(): void {
    alert(this.password);
  }
  public boton(): void {
    this.tipo = "button";
    
  }

}
