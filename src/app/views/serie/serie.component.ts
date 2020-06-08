import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/model/serie';
import { Plataforma } from 'src/app/model/plataforma';
import { SerieService } from 'src/app/services/serie.service';
import { PlataformaService } from 'src/app/services/plataforma.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  vSeries = new Array<Serie>();
  vPlataforma = new Array<Plataforma>();
  slctSerie: Serie = null;
  editMode = false;

  constructor(private serieService: SerieService, private plataformaService: PlataformaService) { }

  ngOnInit(): void {
    this.atualizarSeries();
    this.atualizarPlataforma();
  }

  // Atualiza a lista de Séries salvas no vetor
  atualizarSeries() {
    this.vSeries = this.serieService.read();
  }

  // Atualiza a lista de Plataformas salvas no vetor
  atualizarPlataforma() {
    this.vPlataforma = this.plataformaService.read();
  }

  // Quando uma série armazeanda no Vetor é clicada, esta é armazenada na variável slctSerie, para futura edição
  selecionarSeries(serie: Serie) {
    this.slctSerie = serie;
    this.editMode = true;
  }

  // A variável que contém a informação selecionada, recebe uma nova instância da classe
  novaSerie() {
    this.editMode = false;
    this.slctSerie = new Serie();
  }

  // Limpa o ponteiro que aponta para a a variável slctSerie
  cancelar() {
    this.slctSerie = null;
  }

  // Se o modo editar estiver ativado, as informações na variável slctSerie são atualizadas, senão s]ao salvas
  salvarSerie() {
    if (this.editMode) {
      this.serieService.update(this.slctSerie);
    } else {
      this.serieService.create(this.slctSerie);
    }

    // Limpa os campos
    this.cancelar();
    // Atualiza a lista de séries no vetor
    this.atualizarSeries();
  }

  // Remove a série do vetor, inserida via parâmetro na função
  removerSerie(id: number) {
    this.serieService.delete(id);
    this.atualizarSeries();
  }
}
