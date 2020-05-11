import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component implements OnInit {

  arrayNomeImgs = ['imagem1', 'imagem2', 'imagem3', 'imagem4'];
  constructor() { }

  ngOnInit(): void {
  }

  mostrarNome(imagem: string): void {
    alert(imagem);
  }

}
