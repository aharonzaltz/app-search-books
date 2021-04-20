import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, finalize  } from 'rxjs/operators';
import { SetDataService } from './infrastructure/state-services/set-data.service';
import { MessagesService } from './services/messages.service';
// import { SetDataService } from './state-services/set-data.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  // private setDataService: SetDataService;
  constructor(
    private setDataService: SetDataService,
    private messagesService: MessagesService
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // this.setDataService = this.injector.get(SetDataService);
    this.setDataService.setShowLoadingState(true);
    
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.messagesService.addMessage('error', 'An Error has occurred', 'An Error has occurred during your request process. please try again')
        return throwError(error);
      }),
      finalize(() => this.setDataService.setShowLoadingState(false)),
    );
  }
}
