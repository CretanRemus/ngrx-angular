import { Counter } from "./counter.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectFromState = createFeatureSelector<Counter>('counter');

export const counterSelector = createSelector(
    selectFromState,
    (state) => state.counter
);

export const clickedAtSelector = createSelector(
    selectFromState,
    (state) => state.clickedAt
);