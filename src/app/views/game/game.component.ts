import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/model/game';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games = new Array<Game>();
  genres = new Array<Genre>();

  slctGame: Game = null;
  // O EditMode serve para mostrar à função se ela edita ou inclui dados
  editMode = false;

  constructor(private gameService: GameService, private genreService: GenreService) { }

  ngOnInit(): void {
    // Assim que carregar a página, carregará a função com a lista de jogos atualizada
    this.refreshGames();
    this.refreshGenre();
  }

  // Atualiza a lista de Jogos quando há mudanças nos métodos (create, update, delete)
  refreshGames() {
    this.games = this.gameService.list();
  }

  refreshGenre() {
    this.genres = this.genreService.list();
  }

  equals(o1: Game, o2: Game) {
    if (o1 && o2) {
      return o1.id === o2.id;
    } else {
      return false;
    }
  }

  // Quando um jogo armazenado no Array é clicado, o mesmo é inserido dentro da variável slctGame
  selectGame(game: Game) {
    this.slctGame = game;
    this.editMode = true;
  }

  // Cria um novo Jogo, quando a variável slctGame recebe o valor de clique da função selectGame()
  newGame() {
    this.editMode = false;
    this.slctGame = new Game();
  }

  // Cancela a operação passando o valor nulo para a variável slctGame
  cancel() {
    this.slctGame = null;
  }

  // Salva/Atualiza os dados inseridos nos campos do formulário
  save() {
    if (this.editMode) {
      this.gameService.update(this.slctGame);
    } else {
      this.gameService.create(this.slctGame);
    }

    this.cancel();
    this.refreshGames();
  }

  remove(id: number) {
    this.gameService.delete(id);
    this.refreshGames();
  }

  changeGenre(value: Genre) {
    this.slctGame.genre = value;
  }

}
