import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio7',
  templateUrl: './exercicio7.component.html',
  styleUrls: ['./exercicio7.component.css']
})
export class Exercicio7Component implements OnInit {

  arrayTitulos = ['Como cozinhar melhor?', 'Como não endoidar na Quarentena?', 'Como jogar lol?'];
  arrayPosts = ['Assista Masterchef', 'Não veja notícias na Tv', 'Comunidade tóxica, se poupe!'];

  constructor() { }

  ngOnInit(): void {
  }

}
