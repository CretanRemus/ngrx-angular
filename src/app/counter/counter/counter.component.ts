import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TimeService } from 'src/app/services/time.service';
import { Counter } from 'src/app/store/counter.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  constructor(private timeService: TimeService, private store: Store<Counter>) { }

  ngOnInit(): void {
  }
}
