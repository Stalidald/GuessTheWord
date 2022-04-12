/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordGuesserComponent } from './WordGuesser.component';

describe('WordGuesserComponent', () => {
  let component: WordGuesserComponent;
  let fixture: ComponentFixture<WordGuesserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordGuesserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordGuesserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
