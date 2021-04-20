import { NgModule} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared-modules.module';
import { WishListComponent } from './wish-list.component';
import { WishListRoutes } from './wish-list.routes';


@NgModule({
  declarations: [
    WishListComponent
  ],
  imports: [
    SharedModule,
    WishListRoutes,
  ],
})
export class WishListModule {}
