import { NgModule} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared-modules.module';
import { WelcomeScreenComponent } from './welcome.component';
import { WelcomeRoutes } from './welcome.routes';


@NgModule({
  declarations: [
    WelcomeScreenComponent
  ],
  imports: [
    SharedModule,
    WelcomeRoutes
  ],
})
export class WelcomedModule {}
