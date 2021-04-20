import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BookItemComponent } from '../modules/search-books/book-item/book-item.component';
import { CheckData } from '../modules/search-books/book-data-text.pipe';

@NgModule({
  declarations: [BookItemComponent, CheckData],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    DialogModule,
    ToastModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    DialogModule,
    ToastModule,
    BookItemComponent
  ],
  providers: [MessageService, CheckData],
})
export class SharedModule {}
