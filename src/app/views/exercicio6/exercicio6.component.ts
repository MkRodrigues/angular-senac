import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.css']
})
export class Exercicio6Component implements OnInit {

  nome = '';

  constructor() { }

  ngOnInit(): void {
  }

  trocarNome(nome: string): void {
    this.nome = nome;
  }

}
