import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-checkbox',
  templateUrl: './ex-checkbox.component.html',
  styleUrls: ['./ex-checkbox.component.css']
})
export class ExCheckboxComponent implements OnInit {


  tel: boolean;
  email: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
