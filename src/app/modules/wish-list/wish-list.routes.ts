import { RouterModule, Routes } from '@angular/router';
import { WishListComponent } from './wish-list.component';

export const routes: Routes = [
    { path: '', component: WishListComponent },
];

export const WishListRoutes = RouterModule.forChild(routes);