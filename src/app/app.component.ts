import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appaula7';

  exemplo1: string;
  menu: string;

  abrirComponente(componente: string): void {
    this.menu = componente;
  }

}
