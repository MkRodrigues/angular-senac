import { Injectable } from '@angular/core';
import { Plataforma } from '../model/plataforma';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {

  vPlataformas = new Array<Plataforma>();
  autoIdPlat = 0;

  constructor() { }

  saveLocalStorage() {
    localStorage.setItem('vPlataformas', JSON.stringify(this.vPlataformas));
    localStorage.setItem('plataformasAutoId', this.autoIdPlat.toString());
  }

  loadLocalStorage() {
    this.vPlataformas = JSON.parse(localStorage.getItem('vPlataformas'));

    if (this.vPlataformas == null) {
      this.vPlataformas = new Array<Plataforma>();
    }

    const idAutoGen = localStorage.getItem('plataformasAutoId');
    if (idAutoGen) {
      this.autoIdPlat = Number(idAutoGen);
    }
  }

  create(plataforma: Plataforma) {
    plataforma.id = this.autoIdPlat;
    this.vPlataformas.push(plataforma);
    this.autoIdPlat++;
    this.saveLocalStorage();
  }

  read(): Array<Plataforma> {
    this.loadLocalStorage();
    return this.vPlataformas;
  }

  update(plataforma: Plataforma) {
    for (let i = 0; i < this.vPlataformas.length; i++) {
      const platUpdate = this.vPlataformas[i];

      if (platUpdate.id === plataforma.id) {
        this.vPlataformas[i] = platUpdate;
        break;
      }
    }
    this.saveLocalStorage();
  }

  delete(id: number) {
    for (let i = 0; i < this.vPlataformas.length; i++) {
      const platDelete = this.vPlataformas[i];
      if (id === platDelete.id) {
        this.vPlataformas.splice(i, 1);
      }
    }
    this.saveLocalStorage();
  }
}
