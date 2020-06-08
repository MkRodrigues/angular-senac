import { Component, OnInit } from '@angular/core';
import { Plataforma } from 'src/app/model/plataforma';
import { PlataformaService } from 'src/app/services/plataforma.service';

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {

  vPlataforma = new Array<Plataforma>();
  slctPlataforma = null;
  editMode = false;

  constructor(private plataformaService: PlataformaService) { }

  ngOnInit(): void {
    this.atualizarPlataforma();
  }

  atualizarPlataforma() {
    this.vPlataforma = this.plataformaService.read();
  }

  selecionaPlataforma(plataforma: Plataforma) {
    this.slctPlataforma = plataforma;
    this.editMode = true;
  }

  novaPlataforma() {
    this.editMode = false;
    this.slctPlataforma = new Plataforma();
  }

  cancelar() {
    this.slctPlataforma = null;
  }

  salvarPlataforma() {
    if (this.editMode) {
      this.plataformaService.update(this.slctPlataforma);
    } else {
      this.plataformaService.create(this.slctPlataforma);
    }

    this.cancelar();
    this.atualizarPlataforma();
  }

  removerPlataforma(id: number) {
    this.plataformaService.delete(id);
    this.atualizarPlataforma();
  }

}
