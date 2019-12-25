import { Component, OnInit } from '@angular/core';
import { WeightEntry } from 'src/app/models/weight-entry.model';
import { Storage } from '@ionic/storage';
import { WeightsDataService } from '../../services/weights-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-weight-logger-input',
  templateUrl: './weight-logger-input.component.html',
  styleUrls: ['./weight-logger-input.component.scss'],
})
export class WeightLoggerInputComponent implements OnInit {

  public weightLoggerForm: FormGroup;

  constructor(
    private dataService: WeightsDataService,
  ) { }

  public ngOnInit(): void {
    this.weightLoggerForm = new FormGroup({
      weightInput: new FormControl('', Validators.required),
      weightLogDate: new FormControl(new Date(Date.now()).toISOString(), Validators.required),
    });
  }

  public saveWeight(): void {
    this.dataService.saveWeight(
      this.weightLoggerForm.controls['weightInput'].value,
      new Date(this.weightLoggerForm.controls['weightLogDate'].value)
    );
  }

}
