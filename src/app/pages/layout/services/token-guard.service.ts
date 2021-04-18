import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth.service';

@Injectable()
export class TokenGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token$ = this.auth.getToken();
    return token$.pipe(map(token => {
      if (!token) {
        this.auth.gotoLogin()
      }
      return token != null;

    }))
  }
}
