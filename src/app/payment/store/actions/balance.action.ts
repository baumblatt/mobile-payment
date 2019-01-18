import {Action} from '@ngrx/store';

export const UPDATE_BALANCE = '[Balance] Update balance.';

export class UpdateBalance implements Action {
    readonly type = UPDATE_BALANCE;

    constructor(public payload: any) {
    }
}


export type BalanceAction = UpdateBalance;
