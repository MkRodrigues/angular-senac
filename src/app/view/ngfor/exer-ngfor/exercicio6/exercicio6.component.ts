import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.css']
})
export class Exercicio6Component implements OnInit {

  arrayPaisesMundo = ['Brasil', 'Estados Unidos', 'Franca', 'Angola'];
  arrayCapitais = ['Brasilia', 'Washington', 'Paris', 'Luanda'];

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCapitais(capitais: string): void {
    alert(capitais);
  }

}

