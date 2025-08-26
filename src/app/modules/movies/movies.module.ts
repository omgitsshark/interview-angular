import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesFilterComponent } from './components/movies-filter/movies-filter.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { SetAllOnlineMoviesComponent } from './components/set-all-online-movies/set-all-online-movies.component';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
  declarations: [
    MovieComponent,
    MoviesListComponent,
    MoviesPageComponent,
    MoviesFilterComponent,
    AddMovieComponent,
    SetAllOnlineMoviesComponent,
  ],
  exports: [MoviesPageComponent],
})
export class MoviesModule {}
