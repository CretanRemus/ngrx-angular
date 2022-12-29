import { Counter } from './counter.interface';
import { createReducer, on } from '@ngrx/store';
import * as CounterActions from "./counter.actions";

export const initialState: Counter = {
  counter: 0,
  clickedAt: '',
};

export const counterReducers = createReducer(
    initialState, 
    on(CounterActions.increment, (state) => ({
        ...state,
        counter: state.counter + 1
    })),
    on(CounterActions.decrement, (state) => ({
        ...state,
        counter: state.counter - 1
    })),
    on(CounterActions.reset, (state) => ({
        ...state,
        counter: 0
    })),
    on(CounterActions.getTime, (state, action) => ({
        ...state,
        clickedAt: action.clickedAt
    }))
);
