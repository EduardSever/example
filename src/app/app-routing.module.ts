import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaElementosComponent } from './lista-elementos/lista-elementos.component';

const routes: Routes = [
{path: '', redirectTo: '/ListaElementosComponent', pathMatch: 'full' },
{path: 'ListaElementosComponent', component: ListaElementosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
