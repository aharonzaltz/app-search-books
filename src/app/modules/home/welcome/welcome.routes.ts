import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './welcome.component';

export const routes: Routes = [
    { path: '', component: WelcomeScreenComponent },
];

export const WelcomeRoutes = RouterModule.forChild(routes);