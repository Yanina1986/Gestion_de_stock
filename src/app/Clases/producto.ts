export class Producto {

   
   private _nombre !: string;
   public get_nombre() : string {
    return this._nombre;
   }
   public set_nombre(v : string) {
    this._nombre = v;
   }
   
   
   private _precio !: number;
   public get_precio() : number {
    return this._precio;
   }
   public set_precio(v : number) {
    this._precio = v;
   }
   
   
   private _moneda !: string;
   public get moneda() : string {
    return this._moneda;
   }
   public set moneda(v : string) {
    this._moneda = v;
   }

   
   private _id !:   number;
   public get_id() : number {
    return this._id;
   }
   public set_id(v : number) {
    this._id = v;
   }
   
   
   private _tipoProducto !: string;
   public get tipoProducto() : string {
    return this._tipoProducto;
   }
   public set tipoProducto(v : string) {
    this._tipoProducto = v;
   }
   



}
