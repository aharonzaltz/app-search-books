import { createAction, props } from '@ngrx/store';
import { IBook } from 'src/app/interfaces/books';

export enum AppStateActionsTypes {
    setLoadingState = '[AppState] set loading state',
    setUserName = '[AppState] set user name',
    setBooks = '[AppState] set books',
    setCurrentBook = '[AppState] set current book',
    setWishList = '[AppState] set wish list',
}

export const setLoadingState = createAction(
    AppStateActionsTypes.setLoadingState,
    props<{data: boolean }>()
  );

  export const setUserName = createAction(
    AppStateActionsTypes.setUserName,
    props<{data: string }>()
  ); 
  
  export const setBooks = createAction(
    AppStateActionsTypes.setBooks,
    props<{data: IBook[] }>()
  );
  export const setCurrentBook = createAction(
    AppStateActionsTypes.setCurrentBook,
    props<{data: IBook }>()
  );

  export const setWishList = createAction(
    AppStateActionsTypes.setWishList,
    props<{data: IBook, action: 'add' | 'remove' }>()
  );


