import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { CardComponent } from '../../components/card/card.component';
import { Movie, MoviesResponse } from '../../models/movie.model';
import { CardService } from '../../components/card/card.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule, MdbRippleModule, CardComponent, RouterModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  search = '';
  imdbId = ''; // p/ abrir por ID

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    const term = this.search?.trim() || 'horror';
    this.cardService.getMovies(term).subscribe((res: MoviesResponse) => {
      this.movies = res?.Search ?? [];
    });
  }

  goToId(): void {
    const id = this.imdbId.trim();
    if (!id) return;
    this.router.navigate(['/movie-details', id]);
  }
}
