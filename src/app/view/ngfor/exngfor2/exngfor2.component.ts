import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exngfor2',
  templateUrl: './exngfor2.component.html',
  styleUrls: ['./exngfor2.component.css']
})
export class Exngfor2Component implements OnInit {

  arrayNomeFilme = ['Titanic', 'Interestelar', 'Matrix', 'It', 'Harry Potter'];
  arrayNotaFilme = [2, 1, 8, 1, 10];
  constructor() { }

  ngOnInit(): void {
  }

}
