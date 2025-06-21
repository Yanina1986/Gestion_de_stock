import { Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { SumadorComponent } from './sumador/sumador.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { PersonasComponent } from './componentes/personas/personas.component'; 
import { ProductoComponent } from './componentes/producto/producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';



export const routes: Routes = [
    {path:'',  component: HomeComponent},
    {path:'login', component:LoginComponent},
    //{path:'sumador', component:SumadorComponent},
    {path:'registro', component:RegistroComponent},
    {path:'registro/:indexPersona', component:RegistroComponent},
    {path:'factura', component:FacturaComponent},
    {path:'personas', component:PersonasComponent},
    //{path:'**', component: NotFoundComponent}
    {path: 'producto',component:ProductoComponent},
    {path: 'producto/:idProducto',component:ProductoComponent},
    {path: 'listaProducto',component:ListaProductoComponent},

];