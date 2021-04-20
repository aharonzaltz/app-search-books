import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/interfaces/books';
import { StoreDataService } from 'src/app/infrastructure/state-services/get-data.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  selectedBook$: Observable<IBook>;
  selectedBook: boolean;

  readonly fields = [
    {field: 'authors', label: 'Author/s'},
    {field: 'publisher', label: 'Publisher/s'},
    {field: 'publishedDate', label: 'Year of publish'},
    {field: 'description', label: 'Description'},
    {field: 'language', label: 'Language'},
  ]

  constructor(
    private storeDataService: StoreDataService
    ) { }

  ngOnInit() {
    this.initCurrentBook();
  }

  initCurrentBook(){
    this.selectedBook$ = this.storeDataService.getSelectedBook().pipe(
      tap(selectedBook => this.selectedBook = !!selectedBook)
    );
  }
}
