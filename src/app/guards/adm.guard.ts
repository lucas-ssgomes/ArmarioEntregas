import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthAdmService } from '../servicos/auth-adm.service';

@Injectable({
  providedIn: 'root'
})
export class AdmGuard implements CanActivate {

  constructor (private authService: AuthAdmService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isLoggedInAdm()) {
        return true;
      }
      this.router.navigate(['loginAdm']);
      return false;
  }
}
