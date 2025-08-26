import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MoviesService } from '../../services/movie.service';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Subject,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesFilterComponent implements OnInit, OnDestroy {
  public searchControl = new FormControl();

  private readonly DELAY = 500;
  private destroyed$ = new Subject<void>();

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.subToControl();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private subToControl(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(this.DELAY),
        map((searchName: string) => searchName.trim()),
        map((searchName: string) => (searchName.length >= 3 ? searchName : '')),
        distinctUntilChanged(),
        takeUntil(this.destroyed$)
      )
      .subscribe((searchName: string) => {
        this.moviesService.setFilter({ searchName });
      });
  }
}
