import { Injectable } from '@angular/core';
import { Genre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private genres = new Array<Genre>();
  private autoId = 0;

  constructor() { }

  // Local Storage
  saveLocal() {
    // Salva o estado do array/autoId transformado em String no Local Storage
    localStorage.setItem('genres', JSON.stringify(this.genres));
    localStorage.setItem('genreAutoId', this.autoId.toString());
  }

  loadLocal() {
    // Transforma os dados salvos em Local Storage em formato Json para um Objeto/Array
    this.genres = JSON.parse(localStorage.getItem('genres'));

    // Se o objeto recebido for vazio, a variável receberá o valor null, podendo acarretar em erros no programa devido a mesma ser nula:
    if (this.genres == null) {
      this.genres = new Array<Genre>();
    }

    const autoIdGen = localStorage.getItem('genreAutoId');
    if (autoIdGen) {
      this.autoId = Number(autoIdGen);
    }
  }
  // Fim Local Storage

  create(genre: Genre) {
    genre.id = this.autoId;
    this.genres.push(genre);
    this.autoId++;
    this.saveLocal();
  }

  list(): Array<Genre> {
    // Chamar o méltodo LoadLocal antes de retornar o valor, para que  valor retornado seja os dados atualizados
    this.loadLocal();
    return this.genres;
  }

  update(genre: Genre) {
    for (let i = 0; i < this.genres.length; i++) {
      const genreUpdate = this.genres[i];
      if (genreUpdate.id === genre.id) {
        this.genres[i] = genre;
        break;
      }
    }
    this.saveLocal();
  }

  delete(id: number) {
    for (let i = 0; i < this.genres.length; i++) {
      const genreRemove = this.genres[i];

      if (id === genreRemove.id) {
        this.genres.splice(i, 1);
        break;
      }
    }
    this.saveLocal();
  }
}
