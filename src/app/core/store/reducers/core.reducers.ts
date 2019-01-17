import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {usersReducer, UsersState} from './users.reducers';

export interface CoreState {
    users: UsersState;
}

export const coreReducers: ActionReducerMap<CoreState> = {
    users: usersReducer,
};

export const getCoreState = createFeatureSelector<CoreState>(
    'core'
);
