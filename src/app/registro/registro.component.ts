import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Persona } from '../Clases/persona';
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
      t =>{
        this.indexPersona = <number>(t.get("indexPersona")?? -1);
        if(this.indexPersona> -1){
          let usuarios: Array<Persona> = JSON.parse(/api/register.getItem('usuarios') ?? "[]");
          this.usuario = usuarios[this.indexPersona];
        }
      }
    );
   }

   public usuario : Persona  = new Persona();

   public indexPersona: number = -1;
   public password!: string;

   public tipo: string = "password";

   public registrarUsuario(){
    if (this.usuario.password != this.password){
      alert ("Error, no coicide la contraseña");
      return;
    }

    let usuarios : Array<Persona> = JSON.parse(/api/register.getItem('usuarios')?? "[]");
    
    if (usuarios.some(u => u.usuario == this.usuario.usuario)) {
      alert("El usuario ya existe");
        return;
   }
   usuarios.push(this.usuario);
   /api/register.setItem('usuarios', JSON.stringify(usuarios));
   }
   public mostrarPass(){
    if(this.tipo== "password")
      this.tipo = "text";
    else
    this.tipo = this.password; 

   }
   public modificarUsuario(){
    let usuarios: Array<Persona> = JSON.parse(/api/register.getItem('usuarios') ?? "[]");

    let usuarioAModificar = usuarios.filter(u => u.usuario == this.usuario.usuario)[0];
    usuarioAModificar.apellido = this.usuario.apellido;
    usuarioAModificar.nombre = this.usuario.nombre;
    usuarioAModificar.password = this.usuario.password;
    /api/register.setItem('usuarios', JSON.stringify(usuarios));

  }
  registroForm = this.fb.group({
    usuario: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repetirPassword: ['', Validators.required]
  });

  registrarUsuario() {
    const form = this.registroForm.value;
  
    if (form.password !== form.repetirPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
  
    this.authService.registrar(form).subscribe({
      next: () => {
        alert("Registrado correctamente");
        this.router.navigate(['/login']); // o a donde quieras
      },
      error: err => alert("Error: " + err.error?.mensaje)
    });
  }
  @Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private apiUrl = 'http://localhost:3000/api';
  
    constructor(private http: HttpClient) {}
  
    registrar(usuario: any) {
      return this.http.post(`${this.apiUrl}/register`, usuario);
    }
  }
  
}
   

