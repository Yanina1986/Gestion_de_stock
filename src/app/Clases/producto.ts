export class Producto {
   private _nombre!: string;
 
   get nombre(): string {
     return this._nombre;
   }
 
   set nombre(v: string) {
     this._nombre = v;
   }
 
   private _precio!: number;
   get precio(): number {
     return this._precio;
   }
   set precio(v: number) {
     this._precio = v;
   }
 
   private _moneda!: string;
   get moneda(): string {
     return this._moneda;
   }
   set moneda(v: string) {
     this._moneda = v;
   }
 
   private _id!: number;
   get id(): number {
     return this._id;
   }
   set id(v: number) {
     this._id = v;
   }
 
   private _tipoProducto!: string;
   get tipoProducto(): string {
     return this._tipoProducto;
   }
   set tipoProducto(v: string) {
     this._tipoProducto = v;
   }
 }
 