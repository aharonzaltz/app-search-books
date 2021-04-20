import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBook } from 'src/app/interfaces/books';
import { StoreKeys } from '../config-store/config-store';
import {IApplicationState} from './app-state.reducer';

export const appState = createFeatureSelector<any, IApplicationState>(StoreKeys.appState);

export const selectLoadingState = () =>
  createSelector<any, IApplicationState, boolean>(appState, (state: IApplicationState) => state.loadingState );
  
  export const selectUserName = () =>
  createSelector<any, IApplicationState, string>(appState, (state: IApplicationState) => state.userLoginName ); 
  
  export const selectAllBooks = () =>
  createSelector<any, IApplicationState, IBook[]>(appState, (state: IApplicationState) => state.allBooks ); 
  
  export const selectedBook = () =>
  createSelector<any, IApplicationState, IBook>(appState, (state: IApplicationState) => state.selectedBook );

  export const selectWishList = () =>
  createSelector<any, IApplicationState, IBook[]>(appState, (state: IApplicationState) => state.wishList );




