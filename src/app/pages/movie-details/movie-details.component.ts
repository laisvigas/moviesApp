import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { CardDetailsComponent } from '../../components/card-details/card-details.component';
import { MovieDetails } from '../../models/movie.model';
import { CardService } from '../../components/card/card.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, CardDetailsComponent],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie?: MovieDetails;

  constructor(private route: ActivatedRoute, private cardService: CardService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // pega /:id
    if (!id) return;

    // call method from service card
    this.cardService.getMovieDetails(id).subscribe((res) => {
      this.movie = res;
    });
  }
}
