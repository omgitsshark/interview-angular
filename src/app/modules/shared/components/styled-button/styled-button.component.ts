import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '[styledButton]',
  templateUrl: './styled-button.component.html',
  styleUrls: ['./styled-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'styled-button',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StyledButtonComponent {}
