import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from 'src/app/store/counter.interface';
import { counterSelector, clickedAtSelector, selectFromState } from 'src/app/store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<Counter>;

  constructor(private store: Store<Counter>) {
    this.counter$ = this.store.pipe(select(selectFromState));
   }

  ngOnInit(): void {
  }

}
