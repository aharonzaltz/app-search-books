import { NgModule} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared-modules.module';
import { SearchBookRoutes } from './search-book.routes';
import { SearchPageComponent } from './search-page.component';


@NgModule({
  declarations: [
    SearchPageComponent,
  ],
  imports: [
    SharedModule,
    SearchBookRoutes
  ],
})
export class SearchBookModule {}
