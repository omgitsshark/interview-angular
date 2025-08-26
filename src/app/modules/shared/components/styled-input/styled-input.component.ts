import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'input[styledInput]',
  templateUrl: './styled-input.component.html',
  styleUrls: ['./styled-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'styled-input',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StyledInputComponent {}
