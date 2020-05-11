import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExSelectComponent } from './view/ex-select/ex-select.component';
import { FormsModule } from '@angular/forms';
import { ExCheckboxComponent } from './view/ex-checkbox/ex-checkbox.component';
import { ExRadiobtnComponent } from './view/ex-radiobtn/ex-radiobtn.component';
import { Exercicio3Component } from './view/exercicio3/exercicio3.component';
import { DesafioComponent } from './view/desafio/desafio.component';
import { ExemplongifComponent } from './view/exemplongif/exemplongif.component';
import { ExercicioNgif1Component } from './view/exercicio-ngif1/exercicio-ngif1.component';
import { ExercicioNgif2Component } from './view/exercicio-ngif2/exercicio-ngif2.component';
import { ExercicioNgif3Component } from './view/exercicio-ngif3/exercicio-ngif3.component';
import { ExercicioNgif4Component } from './view/exercicio-ngif4/exercicio-ngif4.component';
import { Exngfor1Component } from './view/ngfor/exngfor1/exngfor1.component';
import { Exngfor2Component } from './view/ngfor/exngfor2/exngfor2.component';
import { Exercicio5Component } from './view/ngfor/exer-ngfor/exercicio5/exercicio5.component';
import { Exercicio6Component } from './view/ngfor/exer-ngfor/exercicio6/exercicio6.component';
import { Exercicio7Component } from './view/ngfor/exer-ngfor/exercicio7/exercicio7.component';
import { Exercicio8Component } from './view/ngfor/exer-ngfor/exercicio8/exercicio8.component';

@NgModule({
  declarations: [
    AppComponent,
    ExSelectComponent,
    ExCheckboxComponent,
    ExRadiobtnComponent,
    Exercicio3Component,
    DesafioComponent,
    ExemplongifComponent,
    ExercicioNgif1Component,
    ExercicioNgif2Component,
    ExercicioNgif3Component,
    ExercicioNgif4Component,
    Exngfor1Component,
    Exngfor2Component,
    Exercicio5Component,
    Exercicio6Component,
    Exercicio7Component,
    Exercicio8Component
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
