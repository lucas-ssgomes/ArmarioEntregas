import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthLojaFisicaService } from '../servicos/auth-loja-fisica.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLojaFisicaGuard implements CanActivate {

  constructor (private authService: AuthLojaFisicaService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isLoggedInLojaFisica()) {
        return true;
      }
      this.router.navigate(['loginLojaFisica']);
      return false;
  }
}
