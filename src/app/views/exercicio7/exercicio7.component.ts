import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio7',
  templateUrl: './exercicio7.component.html',
  styleUrls: ['./exercicio7.component.css']
})

export class Exercicio7Component implements OnInit {

  classDiv1 = 'divVisivel';
  classDiv2 = 'divInvisivel';
  classDiv3 = 'divInvisivel';
  divAtual = 'div1';

  constructor() { }

  ngOnInit(): void {
  }

  trocarDiv(): void {
    if (this.divAtual === 'div1') {
      this.divAtual = 'div2';
      this.classDiv1 = 'divInvisivel';
      this.classDiv2 = 'divVisivel';
      this.classDiv3 = 'divInvisivel';

    } else if (this.divAtual === 'div2') {
      this.divAtual = 'div3';
      this.classDiv1 = 'divInvisivel';
      this.classDiv2 = 'divInvisivel';
      this.classDiv3 = 'divVisivel';

    } else {
      this.divAtual = 'div1';
      this.classDiv1 = 'divVisivel';
      this.classDiv2 = 'divInvisivel';
      this.classDiv3 = 'divInvisivel';
    }
  }
}
