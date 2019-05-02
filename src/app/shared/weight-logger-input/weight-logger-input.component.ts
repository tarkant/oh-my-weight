import { Component, OnInit } from '@angular/core';
import { WeightEntry } from 'src/app/models/weight-entry.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-weight-logger-input',
  templateUrl: './weight-logger-input.component.html',
  styleUrls: ['./weight-logger-input.component.scss'],
})
export class WeightLoggerInputComponent implements OnInit {

  public weightEntry: WeightEntry;
  public inputWeight: number;
  public inputDate = new Date(Date.now()).toISOString();

  constructor(
    public storage: Storage,
  ) { }

  public ngOnInit(): void {

  }

  public saveWeight(): void {
    let weights: WeightEntry[];
    this.storage.get('weights').then(arr => {
      weights = arr || [];
      weights.push({
        weight: this.inputWeight,
        date: this.inputDate
      });
      this.storage.set('weights', weights);
    });
  }

}
