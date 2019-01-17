import {User} from '../../models/users.model';
import {UPDATE_USER, UsersAction} from '../actions/users.action';

export interface UsersState {
    user?: User;
}

export const initialState: UsersState = {};

export function usersReducer(state = initialState, action: UsersAction): UsersState {

    switch (action.type) {

        case UPDATE_USER: {
            return {
                ...state,
                user: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
