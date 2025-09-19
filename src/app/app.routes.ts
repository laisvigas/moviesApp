import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import {HomeComponent} from './pages/home/home.component';
import {MovieDetailsComponent} from './pages/movie-details/movie-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent
  },
];
