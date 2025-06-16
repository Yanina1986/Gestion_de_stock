import { Component } from '@angular/core';
import { Producto } from '../Clases/producto';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-producto',
  imports: [FormsModule, NgIf],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
 public miProducto: Producto;

 constructor(){
  this.miProducto = new Producto();

 }
 public guardar (){
  let producto:Array<Producto> =JSON.parse (localStorage.getItem("productos")?? '[]');
  this.miProducto.id = producto.length +1;
  producto.push(this.miProducto);
  localStorage.setItem('productos', JSON.stringify(producto));

 }
  public limpiar(){
    this.miProducto = new Producto();

  }

 
}
