import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../servicos/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLojaFisicaGuard implements CanActivate {

  constructor (private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isLoggedIn()) {
        return true;
      }
      this.router.navigate(['loginLojaFisica']);
      return false;
  }
}
