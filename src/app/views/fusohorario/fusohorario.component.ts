import { Component, OnInit } from '@angular/core';
import { Fusohorario } from 'src/app/model/fusohorario';
import { FusohorarioService } from 'src/app/services/fusohorario.service';

@Component({
  selector: 'app-fusohorario',
  templateUrl: './fusohorario.component.html',
  styleUrls: ['./fusohorario.component.css']
})
export class FusohorarioComponent implements OnInit {

  fusohorario: string;
  fusoh: Fusohorario;

  constructor(private fusohorarioService: FusohorarioService) { }

  ngOnInit(): void {
  }

  consultarFusohorario() {
    this.fusohorarioService.listarFusohorario(this.fusohorario).subscribe(fuso => {
      this.fusoh = fuso;
    });
  }
}


// cep: string;
//   endereco: Endereco;

//   constructor(private cepService: CepService) { }

//   ngOnInit(): void {
//   }

//   consultarCep() {
//     this.cepService.getCep(this.cep).subscribe(address => {
//       this.endereco = address;
//     });
//   }

// }
