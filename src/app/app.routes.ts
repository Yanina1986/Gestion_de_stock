import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import path from 'path';
import { Producto } from './Clases/producto';
import { Component } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { RegistroComponent } from './registro/registro.component';




export const routes: Routes = [
    {path: "",component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "registro",component:RegistroComponent}, 
    {path: "producto",component: ProductoComponent},

];