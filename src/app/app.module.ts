import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { approuting } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CsvComponent } from './csv/csv.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvComponent
  ],
  imports: [
    BrowserModule,
    approuting,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
