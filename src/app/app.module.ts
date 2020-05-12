import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exemplo1Component } from './views/ngswitch/exemplos/exemplo1/exemplo1.component';
import { Exercicio1Component } from './views/ngswitch/exercicios/exercicio1/exercicio1.component';
import { FormsModule } from '@angular/forms';
import { Exercicio2Component } from './views/ngswitch/exercicios/exercicio2/exercicio2.component';
import { Exercicio3Component } from './views/ngswitch/exercicios/exercicio3/exercicio3.component';
import { SobreComponent } from './views/ngswitch/exercicios/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo1Component,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
