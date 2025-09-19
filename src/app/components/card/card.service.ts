import { Injectable } from '@angular/core';
import {Movie, MovieDetails, MoviesResponse} from '../../models/movie.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private domain: string = 'http://www.omdbapi.com/';
  private apiKey: string = '90af6be8';

  constructor(private http:HttpClient) {}

  getMovies(search: string): Observable<MoviesResponse>{
    return this.http.get<MoviesResponse>(`${this.domain}/?apikey=${this.apiKey}&s=${search}`);
  }

  // search movie by id
  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(
      `${this.domain}?apikey=${this.apiKey}&i=${id}&plot=full`
    );
  }
}
