import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component implements OnInit {

  imagem = 'assets/lapagada.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  trocarImagem(): void {
    if (this.imagem === 'assets/lapagada.jpg') {
      this.imagem = 'assets/lacesa.jpg';
    } else {
      this.imagem = 'assets/lapagada.jpg';
    }
  }


}
