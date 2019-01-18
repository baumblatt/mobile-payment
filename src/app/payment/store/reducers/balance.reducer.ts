import {BalanceAction} from '../actions/balance.action';

export interface BalanceState {
    account?: any;
}

export const initialState: BalanceState = {};

export function balanceReducer(state = initialState, action: BalanceAction): BalanceState {

    switch (action.type) {


        default: {
            return state;
        }
    }
}
