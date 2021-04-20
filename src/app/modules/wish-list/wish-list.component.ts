import { IBook } from '../../interfaces/books';
import { Component, OnInit } from '@angular/core';
import { StoreDataService } from 'src/app/infrastructure/state-services/get-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  userName$: Observable<string>;
  wishList$: Observable<IBook[]>;

  constructor(
    private storeDataService: StoreDataService,
    ) { }

  ngOnInit() {
    this.userName$ = this.storeDataService.getUserName();
    this.wishList$ = this.storeDataService.getWishList();
  }

}
