import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';

import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from './servies/authentication.service';
import { inject } from '@angular/core';
import { map, Observable, take } from 'rxjs';

export const canActivate = (
  router: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot): boolean | UrlTree |Promise<boolean | UrlTree> | Observable<boolean | UrlTree> => {
  const authService = inject(AuthenticationService);
  const route = inject(Router);

  return authService.user.pipe(take(1), map((user) => {
      const loggedIn =  user ? true : false;

      if(loggedIn){
          return true;
      }else {
          return route.createUrlTree(['connect/login']);
      }
  }))
}