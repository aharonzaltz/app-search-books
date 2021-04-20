import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { debounceTime, map, skipWhile, switchMap } from 'rxjs/operators'
import { IPaginationEvent } from 'src/app/interfaces/pagination-event';
import { fromEvent, Observable } from 'rxjs';
import { IBook } from 'src/app/interfaces/books';
import { StoreDataService } from 'src/app/infrastructure/state-services/get-data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  userName$: Observable<string>;
  @ViewChild('input', { read: ElementRef }) input: ElementRef;
  booksList$: Observable<IBook[]>;
  totalItems$: Observable<number>;
  textSearched: string;


  constructor(
    private booksService: BooksService,
    private storeDataService: StoreDataService,
    ) { }

  ngOnInit() {
    this.initUserName();
    this.initBookList();
  }

  ngAfterViewInit() {
    this.totalItems$ = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        skipWhile((val: KeyboardEvent) => !(<any>val.target).value),
        map((val: KeyboardEvent) => (<any>val.target).value),
        switchMap((serachText: string) => this.booksService.searchBookAndGetTotalItems(serachText))
      )
  }

  trackByIdentity(index: number, item: any){ item };

  initUserName() {
    this.userName$ = this.storeDataService.getUserName();
  }

  initBookList() {
    this.booksList$ = this.storeDataService.getBookList();
  }

  onPageChange(event: IPaginationEvent, textToSearch: string) {
    this.totalItems$ = this.booksService.searchBookAndGetTotalItems(textToSearch, event.first);
  }

}
