import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { StyledInputComponent } from './components/styled-input/styled-input.component';
import { StyledButtonComponent } from './components/styled-button/styled-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    CardComponent,
    StyledInputComponent,
    StyledButtonComponent,
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    StyledInputComponent,
    StyledButtonComponent,
  ],
})
export class SharedModule {}
