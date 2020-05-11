import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-select',
  templateUrl: './ex-select.component.html',
  styleUrls: ['./ex-select.component.css']
})
export class ExSelectComponent implements OnInit {

  cidade: string;

  constructor() { }

  ngOnInit(): void {
  }

}
