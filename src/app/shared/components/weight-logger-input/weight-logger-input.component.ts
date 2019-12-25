import { Component, OnInit } from '@angular/core';
import { WeightEntry } from 'src/app/models/weight-entry.model';
import { Storage } from '@ionic/storage';
import { WeightsDataService } from '../../services/weights-data.service';

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
    private dataService: WeightsDataService,
  ) { }

  public ngOnInit(): void { }

  public saveWeight(): void {
    this.dataService.saveWeight(this.inputWeight, new Date(this.inputDate));
  }

}
