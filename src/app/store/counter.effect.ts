import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { TimeService } from '../services/time.service';
import * as CounterActions from '../store/counter.actions';

@Injectable()
export class CounterEffect {
  getTime$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CounterActions.increment),
      mergeMap(() => {
        return this.timeService.getTimestamp().pipe(
          map((timeObj: any) => {
            return CounterActions.getTime({clickedAt: timeObj.datetime});
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private timeService: TimeService) {}
}
