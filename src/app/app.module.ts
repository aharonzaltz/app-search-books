import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared-modules.module';
import { Interceptor } from './api.interceptor';
import { StoreKeys } from './infrastructure/config-store/config-store';
import * as fromApplicationState from './infrastructure/state-data/app-state.reducer'
import { environment } from 'src/environments/environment';
import { SetDataService } from './infrastructure/state-services/set-data.service';
import { MessagesService } from './services/messages.service';


@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({}),
   StoreModule.forFeature(StoreKeys.appState, fromApplicationState.reducer),
   StoreDevtoolsModule.instrument({
    logOnly: environment.production // Restrict extension to log-only mode
  })
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: (setDataService: SetDataService, messagesService: MessagesService) => new Interceptor(setDataService, messagesService),
      deps: [SetDataService, MessagesService],
      multi: true
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
