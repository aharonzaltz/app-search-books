import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { RouteUrls } from '../config/config-data';
import { StoreDataService } from '../infrastructure/state-services/get-data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private storeDataService: StoreDataService,
    private router: Router
    ) {}

  canActivate() {
    return this.storeDataService.getUserName().pipe(
      map(val => !!val ? true: this.router.parseUrl(RouteUrls.welcome)),
      );
  }
}