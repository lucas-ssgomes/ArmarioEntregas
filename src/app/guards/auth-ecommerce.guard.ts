import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthEcommerceService } from '../servicos/auth-ecommerce.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEcommerceGuard implements CanActivate {

  constructor (private authService: AuthEcommerceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isLoggedInEcommerce()) {
        return true;
      }
      this.router.navigate(['loginEcommerce']);
      return false;
  }
}
