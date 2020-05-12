import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  arrayMovies = new Array<Movie>();
  selectedMovie: Movie = null;
  isAddingNewMovie = false;

  constructor() {
    const filme1 = new Movie();
    const filme2 = new Movie();
    const filme3 = new Movie();

    filme1.name = 'Harry Potter e Câmara Secreta';
    filme1.rating = 10;
    this.arrayMovies.push(filme1);


    filme2.name = 'Salt';
    filme2.rating = 8;
    this.arrayMovies.push(filme2);


    filme3.name = 'O Parasita';
    filme3.rating = 2;
    this.arrayMovies.push(filme3);

  }

  ngOnInit(): void {
  }

  // Métodos

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
    this.isAddingNewMovie = false;
  }
  // Para testar se funciona, jogar o cod abaixo na funcao acima
  // alert(this.selectedMovie.name);

  newMovie() {
    this.selectedMovie = new Movie();
    this.isAddingNewMovie = true;
  }

  addMovie() {
    if (this.selectedMovie.name !== '' && !isNaN(this.selectedMovie.rating)) {

      if (this.isAddingNewMovie) {
        this.arrayMovies.push(this.selectedMovie);
      }

      this.selectedMovie = null;

    } else {
      alert('Alerta! Por favor insira um Nome de Filme e uma Nota para prosseguir!');
    }
  }

  removeMovie(posicao: number) {
    if (confirm('O item será excluído')) {
      this.arrayMovies.splice(posicao, 1);
    }
  }

}
