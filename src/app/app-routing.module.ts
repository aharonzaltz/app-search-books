import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteUrls } from './config/config-data';
import { AuthGuard } from './services/auth.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: RouteUrls.welcome,
    pathMatch: 'full',
  },
  {
    path: RouteUrls.welcome,
    loadChildren: () =>
      import('./modules/home/welcome/welcome.module').then(
        (mod) => mod.WelcomedModule
      ),
  },
  {
    path: RouteUrls.searchPage,
    loadChildren: () =>
      import('./modules/search-books/search-book.module').then(
        (mod) => mod.SearchBookModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: RouteUrls.wishList,
    loadChildren: () =>
      import('./modules/wish-list/wish-list.module').then(
        (mod) => mod.WishListModule
      ),
    canActivate: [AuthGuard],
  },
  
  {
    path: '**',
    redirectTo: RouteUrls.welcome,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
