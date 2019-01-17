import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {from} from 'rxjs';
import {exhaustMap, filter, map, tap} from 'rxjs/operators';
import {LOGOUT_USER, UPDATE_USER, UpdateUser} from '../actions/users.action';

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions, public afAuth: AngularFireAuth, private router: Router) {
    }

    @Effect()
    authenticate$ = this.afAuth.user.pipe(
        filter(user => !!user),
        map(user => {
            const {uid, displayName, email, photoURL} = user;
            return new UpdateUser({uid, displayName, email, photoURL});
        })
    );

    @Effect({dispatch: false})
    updateUser$ = this.actions$.pipe(
        ofType(UPDATE_USER),
        tap(() => this.router.navigate(['/core', 'layout', 'payment']).catch()),
    );

    @Effect({dispatch: false})
    logoutUser$ = this.actions$.pipe(
        ofType(LOGOUT_USER),
        exhaustMap(() => from(this.afAuth.auth.signOut()).pipe(
            tap(() => this.router.navigate(['/core', 'layout', 'login']).catch()),
        )),
    );

}
