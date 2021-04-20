import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { debounceTime, map, skipWhile, switchMap } from 'rxjs/operators'
import { IPaginationEvent } from 'src/app/interfaces/pagination-event';
import { BehaviorSubject, combineLatest, fromEvent, Observable, Subject } from 'rxjs';
import { IBook } from 'src/app/interfaces/books';
import { StoreDataService } from 'src/app/infrastructure/state-services/get-data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {
  userName$: Observable<string>;
  @ViewChild('input', { read: ElementRef }) input: ElementRef;
  booksList$: Observable<IBook[]>;
  totalItems$: Observable<number>;
  textSearched: string;
  private obs = new BehaviorSubject<number>(0);

  constructor(
    private booksService: BooksService,
    private storeDataService: StoreDataService,
    ) { }

  ngOnInit() {
    this.userName$ = this.storeDataService.getUserName();
    this.booksList$ = this.storeDataService.getBookList();
  }

  ngAfterViewInit() {
    this.totalItems$ = 
    combineLatest(
      fromEvent(this.input.nativeElement, 'keyup').pipe(
        debounceTime(1000),
      ),
      this.obs.asObservable()
    )
      .pipe(
        skipWhile(([val, pageNumber]: [KeyboardEvent, number]) => !(<any>val.target).value),
        map(([val, pageNumber]) => [(<any>val.target).value, pageNumber]),
        switchMap(([serachText, pageNumber]) => this.booksService.searchBooks(serachText, pageNumber))
      )
  }

  trackByIdentity(index: number, item: any){ item };

  onPageChange(event: IPaginationEvent) {
    this.obs.next(event.first);
  }

}
