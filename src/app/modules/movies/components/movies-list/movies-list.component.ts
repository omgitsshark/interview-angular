import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Movie } from '../../interfaces';
import { MoviesService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListComponent {
  movies$ = this.moviesService.movies$;

  constructor(private moviesService: MoviesService) {}

  toggleStatus(movie: Movie) {
    this.moviesService.updateMovie({ ...movie, isOnline: !movie.isOnline });
  }

  deleteMovie(id: number) {
    this.moviesService.deleteMovie(id);
  }

  setAllOnline() {
    this.moviesService.setAllOnline();
  }

  trackByFn(index: number, item: Movie): number {
    return item.id;
  }
}
