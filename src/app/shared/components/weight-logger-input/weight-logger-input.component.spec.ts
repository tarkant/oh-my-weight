import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StorageMock } from '../../testing/storage-mock.spec';
import { Storage } from '@ionic/storage';

import { WeightLoggerInputComponent } from './weight-logger-input.component';

describe('WeightLoggerInputComponent', () => {
  let component: WeightLoggerInputComponent;
  let storage: Storage;
  let fixture: ComponentFixture<WeightLoggerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightLoggerInputComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: Storage, useClass: StorageMock }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightLoggerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
