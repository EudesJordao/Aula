import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarAulaComponent } from './features/cadastrar-aula/cadastrar-aula.component';
import { CadastrarRecursosComponent } from './features/cadastrar-recursos/cadastrar-recursos.component';
import { HomeComponent } from './features/home/home.component';
import { NavComponent } from './shared/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarAulaComponent,
    CadastrarRecursosComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
