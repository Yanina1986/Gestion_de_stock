export class Persona {
 
    

    private _id !: number;
    get id(): number {
      return this._id;
    }
    set id(v: number) {
      this._id = v;
    }

    private _nombre !: string;
    get nombre(): string {
     return this._nombre;
   }
   set nombre(v : string){
    this._nombre = v;
   }

    
    private _apellido !: string;
    get apellido() : string {
        return this._apellido;
    }
    set apellido(v : string) {
        this._apellido = v;
    }
    
    
    private _usuario !: string;
    get usuario() : string {
        return this._usuario;
    }
     set usuario(v : string) {
        this._usuario = v;
    }
    

    private _password !: string;
    get password() : string {
        return this._password;
    }
    set password(v : string) {
        this._password = v;
    }
}
