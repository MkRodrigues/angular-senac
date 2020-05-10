import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {

  imagem1 = 'assets/imagem1.jpg';
  imagem2 = 'assets/imagem2.jpg';
  imagem3 = 'assets/imagem3.jpg';

  class1 = 'imagem1';
  class2 = 'imagem2';
  class3 = 'imagem3';


  constructor() { }

  ngOnInit(): void {
  }


}
