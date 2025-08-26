import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesModule } from './modules/movies/movies.module';

@NgModule({
  imports: [BrowserModule, MoviesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
