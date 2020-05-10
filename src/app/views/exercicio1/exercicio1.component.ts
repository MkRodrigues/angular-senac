import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {

  nome = 'Mikael';
  sobrenome = 'Silva';

  constructor() { }

  ngOnInit(): void {
  }

}
