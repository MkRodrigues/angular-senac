import { Injectable } from '@angular/core';
import { Game } from '../model/game';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  private games = new Array<Game>();
  private autoId = 0;

  constructor() { }

  // Local Storage
  saveLocal() {
    // Salva o estado do array/autoId transformado em String no Local Storage
    localStorage.setItem('games', JSON.stringify(this.games));
    localStorage.setItem('gamesAutoId', this.autoId.toString());
  }

  loadLocal() {
    // Transforma os dados salvos em Local Storage em formato Json para um Objeto/Array
    this.games = JSON.parse(localStorage.getItem('games'));

    // Se o objeto recebido for vazio, a variável receberá o valor null, podendo acarretar em erros no programa devido a mesma ser nula:
    if (this.games == null) {
      this.games = new Array<Game>();
    }

    const autoIdGen = localStorage.getItem('gamesAutoId');
    if (autoIdGen) {
      this.autoId = Number(autoIdGen);
    }
  }
  // Fim Local Storage

  create(game: Game) {
    game.id = this.autoId;
    this.games.push(game);
    this.autoId++;

    this.saveLocal();
  }

  list(): Array<Game> {
    // Chamar o méltodo LoadLocal antes de retornar o valor, para que  valor retornado seja os dados atualizados
    this.loadLocal();
    return this.games;
  }

  update(game: Game) {
    for (let i = 0; i < this.games.length; i++) {
      const gameUpdate = this.games[i];
      if (gameUpdate.id === game.id) {
        this.games[i] = game;
        break;
      }
    }
    this.saveLocal();
  }

  delete(id: number) {
    for (let i = 0; i < this.games.length; i++) {
      const gameRemove = this.games[i];

      if (id === gameRemove.id) {
        this.games.splice(i, 1);
        break;
      }
    }
    this.saveLocal();
  }


}
