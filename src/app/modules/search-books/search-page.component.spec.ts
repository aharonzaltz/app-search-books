/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchPageComponent } from './search-page.component';
import { StoreModule } from '@ngrx/store';
import { StoreDataService } from 'src/app/infrastructure/state-services/get-data.service';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ],
      providers: [StoreDataService, StoreModule.forRoot({})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when input text should call to server and get data', () => {
    const inputElement = component.input.nativeElement;
    inputElement.value = "test";
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const resultTable = fixture.debugElement.query(By.css('search-results'));
    expect(resultTable).toBeTruthy();
  });
});
