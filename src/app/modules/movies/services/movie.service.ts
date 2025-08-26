import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { MOCK_MOVIES } from './mock';
import { Movie, MoviesFilter } from '../interfaces';
import { generateUid } from '../../shared/utils';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private moviesSubject = new BehaviorSubject<Movie[]>(MOCK_MOVIES);
  private filterSubject = new BehaviorSubject<MoviesFilter>({ searchName: '' });

  readonly movies$: Observable<Movie[]> = combineLatest([
    this.moviesSubject,
    this.filterSubject,
  ]).pipe(
    map(([movies, filter]) =>
      movies.filter((m) => m.name.toLowerCase().includes(filter.searchName))
    )
  );

  // По тз сказано сделать такой метод, но по факту он не используется
  getMovies(searchName: string): Observable<Movie[]> {
    return this.moviesSubject.pipe(
      map((movies) =>
        movies.filter((m) => m.name.toLowerCase().includes(searchName))
      )
    );
  }

  setFilter(filter: MoviesFilter): void {
    this.filterSubject.next(filter);
  }

  addMovie(name: string): void {
    const movies = this.moviesSubject.value;
    const newMovie: Movie = {
      id: generateUid(),
      name,
      isOnline: false,
    };
    this.moviesSubject.next([...movies, newMovie]);
  }

  updateMovie(updated: Movie): void {
    const movies = this.moviesSubject.value.map((m) =>
      m.id === updated.id ? { ...m, ...updated } : m
    );
    this.moviesSubject.next(movies);
  }

  deleteMovie(id: number): void {
    const movies = this.moviesSubject.value.filter((m) => m.id !== id);
    this.moviesSubject.next(movies);
  }

  setAllOnline(): void {
    const movies = this.moviesSubject.value.map((m) => ({
      ...m,
      isOnline: true,
    }));
    this.moviesSubject.next(movies);
  }
}
