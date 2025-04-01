import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Página principal
    { path: 'about', component: AboutComponent }, // Página "Sobre nosotros"
    { path: 'contact', component: ContactComponent }, // Página de contacto
  ];
  
  @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
export class AppRoutingModule { }