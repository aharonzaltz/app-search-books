import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import {
  selectLoadingState,
  selectUserName,
  selectAllBooks,
  selectedBook,
  selectWishList
} from '../state-data/app-state.selectors';
import { IBook } from 'src/app/interfaces/books';
import { share } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StoreDataService {
  constructor(private store: Store<any>) {}

  getLoadingState(): Observable<boolean> {
    return this.store.pipe(select(selectLoadingState()));
  }

  getUserName(): Observable<string> {
    return this.store.pipe(
        select(selectUserName()),
        share()
        );
  }

  getBookList(): Observable<IBook[]> {
    return this.store.pipe(select(selectAllBooks()));
  }

  getSelectedBook(): Observable<IBook> {
    return this.store.pipe(select(selectedBook()));
  }

  getWishList(): Observable<IBook[]> {
    return this.store.pipe(select(selectWishList()));
  }
}
