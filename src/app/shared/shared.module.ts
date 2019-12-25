import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { WeightLoggerInputComponent } from './components/weight-logger-input/weight-logger-input.component';
import { WeightDisplayTableComponent } from './components/weight-display-table/weight-display-table.component';

@NgModule({
  declarations: [
    WeightLoggerInputComponent,
    WeightDisplayTableComponent,
  ],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
  ],
  exports: [
    WeightLoggerInputComponent,
    WeightDisplayTableComponent,
  ]
})
export class SharedModule { }
