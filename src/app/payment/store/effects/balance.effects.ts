import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Actions, Effect} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {CoreState} from '../../../core/store/reducers/core.reducers';
import {getAuthenticatedUserId} from '../../../core/store/selectors/users.selectors';
import {UpdateBalance} from '../actions/balance.action';

@Injectable()
export class BalanceEffects {

    constructor(private actions$: Actions, private db: AngularFirestore, private store: Store<CoreState>) {
    }

    @Effect()
    balanceSubscription$ = this.store.pipe(
        select(getAuthenticatedUserId),
        switchMap(uid => {
            if (!uid) {
                return EMPTY;
            }

            return this.db.doc(`accounts/${uid}`).valueChanges().pipe(
                map(balance => new UpdateBalance(balance)),
            );
        })
    );
}
