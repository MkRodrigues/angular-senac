import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercicio1Component } from './views/exercicio1/exercicio1.component';
import { Exercicio2Component } from './views/exercicio2/exercicio2.component';
import { Exercicio3Component } from './views/exercicio3/exercicio3.component';
import { Exercicio4Component } from './views/exercicio4/exercicio4.component';
import { Exercicio5Component } from './views/exercicio5/exercicio5.component';
import { Exercicio6Component } from './views/exercicio6/exercicio6.component';
import { Exercicio7Component } from './views/exercicio7/exercicio7.component';
import { BindingDuasViasComponent } from './views/binding-duas-vias/binding-duas-vias.component';
import { FormsModule } from '@angular/forms';
import { TwoWayEx1Component } from './views/two-way-ex1/two-way-ex1.component';
import { TwoWayEx2Component } from './views/two-way-ex2/two-way-ex2.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    Exercicio6Component,
    Exercicio7Component,
    BindingDuasViasComponent,
    TwoWayEx1Component,
    TwoWayEx2Component
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
