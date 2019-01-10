import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {CanLoad, Route, Router, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(public afAuth: AngularFireAuth, private router: Router) {
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
        return this.afAuth.user.pipe(
            map(user => !!user),
            tap(flag => {
                if (!flag) {
                    this.router.navigate(['/core', 'layout', 'login']).catch();
                }
            }),
            take(1),
        );
    }


}
