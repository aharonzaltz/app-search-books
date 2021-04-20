import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page.component';

export const routes: Routes = [
    { path: '', component: SearchPageComponent },
];

export const SearchBookRoutes = RouterModule.forChild(routes);