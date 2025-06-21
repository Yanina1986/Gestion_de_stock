import { Component } from '@angular/core';
import { CommonModule,NgFor,NgIf } from '@angular/common';
import { LoginComponent } from '../../login/login.component';
import { DetalleFacturaComponent } from '../detalle-factura/detalle-factura.component';
@Component({
  selector: 'app-factura',
  imports: [CommonModule, LoginComponent, DetalleFacturaComponent],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  public muestra: boolean = false;
  public cantidad:Array<number> = [1,2,3,4,5,6,7];

  public aceptar() {
    this.muestra = !this.muestra;
  }

  public agregar(){
    this.cantidad.push(58);
  }

}
