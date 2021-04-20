import {createReducer, on} from '@ngrx/store';
import { IBook } from 'src/app/interfaces/books';
import { setBooks, setLoadingState, setUserName, setCurrentBook, setWishList } from './app-state.action';
;

export interface IApplicationState {
  loadingState: boolean;
  userLoginName: string;
  allBooks: IBook[];
  selectedBook: IBook;
  wishList: IBook[];
}



export const initialAppState: IApplicationState = {
  loadingState: false,
  userLoginName: null,
  allBooks: [],
  selectedBook: null,
  wishList: [],
};

export const applicationStateReducer = createReducer(
  initialAppState,
  on(setLoadingState, (state, { data }) => changeState(state, 'loadingState', data)),
  on(setUserName, (state, { data }) => changeState(state, 'userLoginName', data)),
  on(setBooks, (state, { data }) => changeState(state, 'allBooks', data)),
  on(setCurrentBook, (state, { data }) => changeState(state, 'selectedBook', data)),
  on(setWishList, (state, { data, action }) => handleSetWishList(state, data, action)),
);

export function reducer(state: IApplicationState | undefined, action: any) {
  return applicationStateReducer(state, action);
}


function changeState(state: IApplicationState, property: string, data: any) {
  const copyState = { ...state };
  copyState[property] = data;
  return copyState;
}

function handleSetWishList(state: IApplicationState, item: IBook, action: 'add' | 'remove') {

  const copyState = JSON.parse(JSON.stringify(state));
  const wishListIndex = copyState.wishList.findIndex(book => book.id === item.id);
  const booksIndex = copyState.allBooks.findIndex(book => book.id === item.id);
  copyState.allBooks[booksIndex].isWished = action === 'add';
  switch (action) {
    case 'add':
      copyState.wishList.push(item);
      break;
      case 'remove':
        copyState.wishList.splice(wishListIndex, 1);
        break;
    default:
      break;
  }
  return copyState;
}
