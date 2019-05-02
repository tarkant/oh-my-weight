import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StorageMock } from '../testing/storage-mock.spec';
import { Storage } from '@ionic/storage';

import { WeightDisplayTableComponent } from './weight-display-table.component';

describe('WeightDisplayTableComponent', () => {
  let component: WeightDisplayTableComponent;
  let storage: Storage;
  let fixture: ComponentFixture<WeightDisplayTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightDisplayTableComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: Storage, useClass: StorageMock}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightDisplayTableComponent);
    component = fixture.componentInstance;
    storage = TestBed.get(Storage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
