import { NgModule} from '@angular/core';
import { SharedModule } from 'src/app/shared/shared-modules.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchBookRoutes } from './search-book.routes';
import { SearchPageComponent } from './search-page.component';


@NgModule({
  declarations: [
    SearchPageComponent,
    BookDetailsComponent,
  ],
  imports: [
    SharedModule,
    SearchBookRoutes
  ],
})
export class SearchBookModule {}
