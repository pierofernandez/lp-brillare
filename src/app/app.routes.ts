import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TerapiasComponent } from './pages/terapias/terapias.component';
import { TalleresComponent } from './pages/talleres/talleres.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { TerapiasIntegralesComponent } from './pages/terapias-integrales/terapias-integrales.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Página principal
    { path: 'about', component: AboutComponent }, // Página "Sobre nosotros"
    { path: 'contact', component: ContactComponent }, // Página de contacto
    { path: 'terapias', component: TerapiasComponent}, // Página de terapias
    { path: 'talleres', component: TalleresComponent}, // Página de terapias
    { path: 'materiales', component: MaterialesComponent}, // Página de terapias
    { path: 'terapias/integrales', component: TerapiasIntegralesComponent }, 
  ];
  
  @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
export class AppRoutingModule { }