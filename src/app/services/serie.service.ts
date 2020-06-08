import { Injectable } from '@angular/core';
import { Serie } from '../model/serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  vSeries = new Array<Serie>();
  private autoIdSeries = 0;

  constructor() { }

  saveLocalStorage() {
    localStorage.setItem('series', JSON.stringify(this.vSeries));
    localStorage.setItem('autoIdSer', this.autoIdSeries.toString());
  }

  loadLocalStorage() {
    this.vSeries = JSON.parse(localStorage.getItem('series'));

    if (this.vSeries == null) {
      this.vSeries = new Array<Serie>();
    }

    const autoGenId = localStorage.getItem('autoIdSer');
    if (autoGenId) {
      this.autoIdSeries = Number(autoGenId);
    }
  }

  create(serie: Serie) {
    serie.id = this.autoIdSeries;
    this.vSeries.push(serie);
    this.autoIdSeries++;
    this.saveLocalStorage();
  }

  read(): Array<Serie> {
    this.loadLocalStorage();
    return this.vSeries;
  }

  update(serie: Serie) {
    for (let i = 0; i < this.vSeries.length; i++) {
      const serieUpdate = this.vSeries[i];
      if (serieUpdate.id === serie.id) {
        this.vSeries[i] = serie;
        break;
      }
    }
    this.saveLocalStorage();
  }

  delete(id: number) {
    for (let i = 0; i < this.vSeries.length; i++) {
      const serieDelete = this.vSeries[i];
      if (id === serieDelete.id) {
        this.vSeries.splice(i, 1);
        break;
      }
    }
    this.saveLocalStorage();
  }
}
