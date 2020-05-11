import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css']
})
export class DesafioComponent implements OnInit {

  operacoes: string;
  n1: number;
  n2: number;
  total: number;

  constructor() { }

  ngOnInit(): void {
  }

  opMatematica(n1: number, n2: number): number {
    let resultado: number;
    this.total = resultado;
    this.n1 = n1;
    this.n2 = n2;

    if (this.operacoes === 'soma') {
      resultado = n1 + n2;
      return resultado;

    } else if (this.operacoes === 'subtracao') {
      resultado = n1 - n2;
      return resultado;

    } else if (this.operacoes === 'multiplicacao') {
      resultado = n1 * n2;
      return resultado;

    } else if (this.operacoes === 'divisao') {
      resultado = n1 / n2;
      return resultado;
    }

  }
}
