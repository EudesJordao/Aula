import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CadastrarAulaComponent } from './features/cadastrar-aula/cadastrar-aula.component';
import { CadastrarRecursosComponent } from './features/cadastrar-recursos/cadastrar-recursos.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "casdastrar-aula", component: CadastrarAulaComponent },
  {path: "casdastrar-recursos", component: CadastrarRecursosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
