import { Component, OnInit, OnDestroy } from '@angular/core';
import { Storage } from '@ionic/storage';
import { WeightEntry } from 'src/app/models/weight-entry.model';
import { Observable } from 'rxjs';
import { WeightsDataService } from '../../services/weights-data.service';

@Component({
  selector: 'app-weight-display-table',
  templateUrl: './weight-display-table.component.html',
  styleUrls: ['./weight-display-table.component.scss'],
})
export class WeightDisplayTableComponent implements OnInit {

  public weights: Observable<WeightEntry[]>;

  constructor(
    private dataService: WeightsDataService,
  ) { }

  public ngOnInit() {
    this.weights = this.dataService.getWeightsAsObservable();
  }

}
