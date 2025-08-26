import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Movie } from '../../interfaces';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent implements OnInit {
  @Input() name: Movie['name'] = '';
  @Input() isOnline: Movie['isOnline'] = false;

  @Output() delete = new EventEmitter();
  @Output() toggleOnlineStatus = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  handleDelete(): void {
    this.delete.emit();
  }

  handleToggleOnlineStatus(): void {
    this.toggleOnlineStatus.emit();
  }
}
