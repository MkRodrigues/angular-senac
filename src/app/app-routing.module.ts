import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlataformaComponent } from './views/plataforma/plataforma.component';
import { SerieComponent } from './views/serie/serie.component';


const routes: Routes = [
  { path: 'series', component: SerieComponent },
  { path: 'plataformas', component: PlataformaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
