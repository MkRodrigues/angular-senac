import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngif4',
  templateUrl: './exercicio-ngif4.component.html',
  styleUrls: ['./exercicio-ngif4.component.css']
})
export class ExercicioNgif4Component implements OnInit {

  n1: number;
  n2: number;
  resultado: number;
  // operadores: string;

  constructor() { }

  ngOnInit(): void {
  }

  somar() {
    this.resultado = this.n1 + this.n2;
  }

  subtrair() {
    this.resultado = this.n1 - this.n2;
  }

  multiplicar() {
    this.resultado = this.n1 * this.n2;
  }

  dividir() {
    this.resultado = this.n1 / this.n2;
  }

}



