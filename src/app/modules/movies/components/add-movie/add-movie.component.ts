import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MoviesService } from '../../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMovieComponent {
  public form = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private movieService: MoviesService) {}

  addMovie(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      return;
    }

    const name = this.form.value.name;

    if (name) {
      this.movieService.addMovie(name);

      this.form.reset();
    }
  }
}
