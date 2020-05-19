import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  private games = new Array<Game>();
  private autoId = 0;

  constructor() { }

  create(game: Game) {
    game.id = this.autoId;
    this.games.push(game);
    this.autoId++;
  }

  list(): Array<Game> {
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
  }

  delete(id: number) {
    for (let i = 0; i < this.games.length; i++) {
      const gameRemove = this.games[i];

      if (id === gameRemove.id) {
        this.games.splice(i, 1);
        break;
      }
    }
  }


}
