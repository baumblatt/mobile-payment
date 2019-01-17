import {Action} from '@ngrx/store';
import {User} from '../../models/users.model';

export const UPDATE_USER = '[Users] Update user';

export class UpdateUser implements Action {
    readonly type = UPDATE_USER;

    constructor(public payload: User) {
    }
}

export const LOGOUT_USER = '[Users] Logout user';

export class LogoutUser implements Action {
    readonly type = LOGOUT_USER;
}


export type UsersAction = UpdateUser | LogoutUser;
