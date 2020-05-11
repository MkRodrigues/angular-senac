import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exngfor1',
  templateUrl: './exngfor1.component.html',
  styleUrls: ['./exngfor1.component.css']
})
export class Exngfor1Component implements OnInit {

  arrayBichos = ['gato', 'cachorro', 'pássaro', 'coelho'];
  constructor() { }

  ngOnInit(): void {
  }

}
