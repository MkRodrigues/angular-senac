import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './views/game/game.component';
import { GenreComponent } from './views/genre/genre.component';


const routes: Routes = [
  { path: 'games', component: GameComponent },
  { path: 'genre', component: GenreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
