import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from 'src/app/model/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genres = new Array<Genre>();
  slctGenre: Genre = null;
  // O EditMode serve para mostrar à função se ela edita ou inclui dados
  editMode = false;

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    // Assim que carregar a página, carregará a função com a lista de jogos atualizada
    this.refreshGenre();
  }

  // Atualiza a lista de Jogos quando há mudanças nos métodos (create, update, delete)
  refreshGenre() {
    this.genres = this.genreService.list();
  }

  // Quando um jogo armazenado no Array é clicado, o mesmo é inserido dentro da variável slctGenre
  selectGenre(genre: Genre) {
    this.slctGenre = genre;
    this.editMode = true;
  }

  // Cria um novo Jogo, quando a variável slctGenre recebe o valor de clique da função selectGame()
  newGenre() {
    this.editMode = false;
    this.slctGenre = new Genre();
  }

  // Cancela a operação passando o valor nulo para a variável slctGenre
  cancel() {
    this.slctGenre = null;
  }

  // Salva/Atualiza os dados inseridos nos campos do formulário
  save() {
    if (this.editMode) {
      this.genreService.update(this.slctGenre);
    } else {
      this.genreService.create(this.slctGenre);
    }

    this.cancel();
    this.refreshGenre();
  }

  remove(id: number) {
    this.genreService.delete(id);
    this.refreshGenre();
  }
}
