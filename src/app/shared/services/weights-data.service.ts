import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { WeightEntry } from 'src/app/models/weight-entry.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { single } from 'rxjs/operators';
/**
 * Manages the weights data and provides a layer of abstraction for the components rather than letting them
 * interact with localStorage directley
 */
@Injectable({
  providedIn: 'root'
})
export class WeightsDataService {

  private dataRefresh$ = new Subject<boolean>();

  private weights = new BehaviorSubject<WeightEntry[]>([]);

  private readonly DEFAULT_VALUE: WeightEntry = { 
    weight: 0,
    date: new Date(Date.now()).toISOString(),
  };

  constructor(
    private storage: Storage,
  ) {
    this.dataRefresh$.subscribe(() =>
      this.storage.get('weights')
        .then(arr => this.weights.next(arr || []))
    );
    this.dataRefresh$.next(true);
  }

  public saveWeight(value: number, date: Date): void {
    let weights: WeightEntry[];
    this.storage.get('weights').then(arr => {
      weights = arr || [];
      weights.push({
        weight: value,
        date: date.toISOString(),
      });
      this.storage.set('weights', weights);
      this.pushDataChanges();
    });
  }

  public getWeightsAsObservable(): Observable<WeightEntry[]> {
    return this.weights.asObservable();
  }

  public getWeightsValue(): WeightEntry[] {
    return this.weights.getValue();
  }

  private pushDataChanges() {
    this.dataRefresh$.next(true);
  }
}
