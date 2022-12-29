import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from 'src/app/store/counter.interface';
import * as CounterActions from '../../store/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<Counter>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(CounterActions.increment());
    // this.counter++;
  }

  onDecrement() {
    this.store.dispatch(CounterActions.decrement());
    // this.counter--;
  }

  onReset() {
    this.store.dispatch(CounterActions.reset());
    // this.counter = 0;
  }
}
