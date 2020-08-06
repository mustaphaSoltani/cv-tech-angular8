/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailCvComponent } from './detail-cv.component';

describe('DetailCvComponent', () => {
  let component: DetailCvComponent;
  let fixture: ComponentFixture<DetailCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
