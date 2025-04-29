import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
 onSubmit() {
    console.log('Formulario enviado');
    // Agregá aquí la lógica para manejar el registro
  }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 👈 ¡Esto es lo nuevo!

//import { AppComponent } from './app.component';
//import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    //AppComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // 👈 Asegurate de que esté acá también
  ],
 // bootstrap: [AppComponent]
})
export class AppModule { }

