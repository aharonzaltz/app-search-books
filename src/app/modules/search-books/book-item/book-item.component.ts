import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SetDataService } from 'src/app/infrastructure/state-services/set-data.service';
import { IBook } from 'src/app/interfaces/books';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent {
  @Input() book: IBook;
  @Input() isWishListItem = false;
  constructor(
    private setDataService: SetDataService,
  ) { }

  onItemClicked() {
    this.setDataService.setCurrentBook(this.book);
  }

  onWishIconClicked(event: Event, book: IBook) {
    const action = book.isWished || this.isWishListItem? 'remove': 'add';
    this.setDataService.setWishList(book, action);
    event.stopPropagation()
  }

}
