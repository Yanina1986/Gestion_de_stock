import { Component } from '@angular/core';
import { Producto } from '../../Clases/producto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';


@Component({
  selector: 'app-producto',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule],//FormsModule, CommonModule, MatFormFieldModule, MatInputModule]
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  public miProducto: Producto;

  constructor (){
    this.miProducto = new Producto();
  }

  public guardar(){
    let producto:Array<Producto> = JSON.parse(localStorage.getItem("productos")??'[]');
    this.miProducto.id = producto.length +1;
    producto.push(this.miProducto);
    localStorage.setItem('producto',JSON.stringify(producto));
  }
  public limpiar() {
    this.miProducto = new Producto();
  }
}

  /*public miProducto!: Producto;


 constructor(public activeRoute : ActivatedRoute, public produtoService: ProductoService ){
  this.activeRoute.paramMap.subscribe(
    param =>{
      let idParametro = param.get("idProducto") ?? "";
      if (idParametro == "")
        this.miProducto =new Producto();

    else{
      this.miProducto = this.produtoService.Producto.filter(prod=> prod._id.toString()== idParametro)[0]?? new Producto();
    }
  }
  );
 }
  public log(argumento: any){
    console.info(argumento);
  }
  
 public guardar (){
  let productos : Array <Producto> =this.produtoService.Producto;
  if(this.miProducto._id){
    let anterior = productos.filter(prod=> prod._id == this.miProducto._id)[0];
    anterior._nombre = this.miProducto._nombre;
    anterior._descripcion = this.miProducto._descripcion;
    anterior._precio_arg = this.miProducto._precio_arg;
    anterior._categoria = this.miProducto._categoria;
    anterior._imagen = this.miProducto._imagen;
    anterior._tipoProducto = this.miProducto.tipoProducto;
  }else{
    this.miProducto.id = productos.length +1;
    productos.push(this.miProducto);
  }
  this.produtoService.saveProducto(productos);

  }
  public limpiar(){
    this.miProducto = new Producto();

  }

 
}*/
