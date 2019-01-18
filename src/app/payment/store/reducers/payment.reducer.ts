import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {balanceReducer, BalanceState} from './balance.reducer';

export interface PaymentState {
    balance: BalanceState;
}

export const paymentReducers: ActionReducerMap<PaymentState> = {
    balance: balanceReducer,
};


export const getPaymentState = createFeatureSelector('payment');
