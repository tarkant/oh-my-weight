import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { WeightEntry } from 'src/app/models/weight-entry.model';

@Component({
  selector: 'app-weight-display-table',
  templateUrl: './weight-display-table.component.html',
  styleUrls: ['./weight-display-table.component.scss'],
})
export class WeightDisplayTableComponent implements OnInit {

  public weights: Array<WeightEntry>;

  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  public onRefresh() {
    this.storage.get('weights').then(arr => this.weights = arr || []);
  }

}
