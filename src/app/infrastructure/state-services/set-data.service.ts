import { Injectable } from "@angular/core";
import {Store} from '@ngrx/store';
import { IBook } from "src/app/interfaces/books";
import { MessagesService } from "src/app/services/messages.service";
import { setLoadingState, setUserName, setBooks, setCurrentBook, setWishList} from "../state-data/app-state.action";

@Injectable({providedIn: 'root'})
export class SetDataService {
 
  
  constructor(
    private store: Store<any>,
    private messagesService: MessagesService,
  ) {
  }

  setShowLoadingState(show: boolean) {
    this.store.dispatch(setLoadingState({ data: show}));
  }

  setUserName(name: string) {
    this.store.dispatch(setUserName({ data: name}));
  }

  setBooks(books: IBook[]) {
    this.store.dispatch(setBooks({ data: books}));
  }

  setCurrentBook(book: IBook) {
    this.store.dispatch(setCurrentBook({ data: book}));
  }

  setWishList(book: IBook, action: 'add' | 'remove') {
    this.store.dispatch(setWishList({ data: book, action}));
    this.messagesService.addMessage('success', `Item ${action === 'add' ? 'added': 'removed'} successfuly!`)
  }

}