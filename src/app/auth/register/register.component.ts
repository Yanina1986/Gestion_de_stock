import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  registrar() {
    if (this.registroForm.invalid) return;
    const usuario = this.registroForm.value;
    this.authService.registrar(usuario).subscribe({
      next: () => {
        alert('Registrado con éxito');
        this.router.navigate(['/login']);
      },
      error: err => alert(err.error?.mensaje || 'Error al registrar'),
    });
  }
}



