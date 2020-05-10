import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-ex1',
  templateUrl: './two-way-ex1.component.html',
  styleUrls: ['./two-way-ex1.component.css']
})
export class TwoWayEx1Component implements OnInit {

  cp1 = '';
  cp2 = '';

  constructor() { }

  ngOnInit(): void {
  }

}
