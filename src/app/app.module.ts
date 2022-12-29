import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { HttpClientModule } from '@angular/common/http';
import { ReducerManager, StoreModule } from '@ngrx/store';
import { counterReducers } from './store/counter.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffect } from './store/counter.effect';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}), 
    StoreModule.forFeature('counter', counterReducers),
    EffectsModule.forRoot(), 
    EffectsModule.forFeature([CounterEffect]),
  ],
  providers: [ReducerManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
