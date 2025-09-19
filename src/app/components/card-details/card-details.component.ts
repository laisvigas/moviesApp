import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Rating = { Source: string; Value: string };

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent {
  @Input() Title = '';
  @Input() Year = '';
  @Input() Rated = '';
  @Input() Released = '';
  @Input() Runtime = '';
  @Input() Genre = '';
  @Input() Director = '';
  @Input() Writer = '';
  @Input() Actors = '';
  @Input() Plot = '';
  @Input() Language = '';
  @Input() Country = '';
  @Input() Awards = '';
  @Input() Poster = '';
  @Input() Ratings: Rating[] = [];
  @Input() Metascore = '';
  @Input() imdbRating = '';
  @Input() imdbVotes = '';
  @Input() imdbID = '';
  @Input() Type = '';
  @Input() DVD = '';
  @Input() BoxOffice = '';
  @Input() Production = '';
  @Input() Website = '';
  @Input() Response = '';
}
