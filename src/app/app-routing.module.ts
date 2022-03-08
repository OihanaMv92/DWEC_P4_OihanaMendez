import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  { path:"",component:LibrosComponent},
  { path:"anadirlibro",component:NuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
