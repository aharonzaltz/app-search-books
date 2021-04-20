import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { StoreDataService } from './infrastructure/state-services/get-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showLoadingMask$: Observable<boolean>;
  showLoadingMask = true;

  constructor(private storeDataService: StoreDataService) {}
  ngOnInit() {
    this.showLoadingMask$ = this.storeDataService.getLoadingState().pipe(
      distinctUntilChanged(),
      tap(showLoadingMask => {
        this.showLoadingMask = showLoadingMask
      }),
    )}
}
