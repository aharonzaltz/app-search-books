import { IBook } from '../interfaces/books';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SetDataService } from '../infrastructure/state-services/set-data.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly baseUrl = "https://www.googleapis.com/books/v1/volumes?maxResults=20&q=";
  localStorageService: any
  constructor(
    private http: HttpClient,
     private setDataService: SetDataService,
     ) {
  }

  searchBooks(keyWords: string, startIndex = 0): Observable<number> {
    if (!keyWords){
      this.setDataService.setBooks([]);
      return of(0);
    }

    keyWords = keyWords.split(' ').join('+');
    const url = `${this.baseUrl}${keyWords}&startIndex=${startIndex}`;

    return this.http.get(url).pipe(
      tap((result: { totalItems: number, items: any[] }) => {
        let items: IBook[] = result.items.map(this.getBookData);
        this.setDataService.setBooks(items);
      }),
      map(result => result.totalItems)
    );

  }

  getBookData(bookFromServe: any): IBook{
    const volumeInfo = bookFromServe.volumeInfo;
    return {
      id: bookFromServe.id,
      title: volumeInfo.title,
      subtitle:volumeInfo.subtitle,
      authors: volumeInfo.authors,
      publisher: volumeInfo.publisher,
      publishedDate: volumeInfo.publishedDate,
      description: volumeInfo.description,
      language: volumeInfo.language,
      isWished: false,
    }
  }

}
