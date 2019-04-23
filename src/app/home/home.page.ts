import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public weightList: Array<number>;
  public dateList: Array<string>;
  public inputWeight: number;
  public inputDate = new Date(Date.now()).toISOString();
  
  constructor() {}

  public ngOnInit() {
    
  }
}
