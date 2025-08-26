import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MoviesService } from '../../services/movie.service';

@Component({
  selector: 'app-set-all-online-movies',
  templateUrl: './set-all-online-movies.component.html',
  styleUrls: ['./set-all-online-movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetAllOnlineMoviesComponent {
  constructor(private moviesService: MoviesService) {}

  handleClick(): void {
    this.moviesService.setAllOnline();
  }
}
