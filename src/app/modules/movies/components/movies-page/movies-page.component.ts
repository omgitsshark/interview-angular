import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movie.service';
import { MoviesFilter } from '../../interfaces';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesPageComponent {
  movies$ = this.moviesService.movies$;

  constructor(private moviesService: MoviesService) {}

  setFilter(filter: MoviesFilter) {
    this.moviesService.setFilter(filter);
  }
}
