import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { chartData } from './datasource';
import {Tick} from "./Tick";
import {ApiService} from "./api.service";
@Component({
  selector: 'app-container',
  template:
    `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis'  [primaryYAxis]='primaryYAxis' [title]='title' [crosshair]='crosshair'>
      <e-stockchart-series-collection>
        <e-stockchart-series [dataSource]='stockchartData' type='Candle' xName='date'  name='India' width=2 ></e-stockchart-series>
      </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
  public primaryXAxis: Object;
  public primaryYAxis: Object;
  public stockchartData: Object[];

  public emptySeries1: Object;
  public emptySeries2: Object;
  public ticks:Tick[];
  public title: string;
  public crosshair: Object;

  constructor(private http:ApiService) {}

  ngOnInit(): void {


    this.http.GetChart().subscribe(
      value => {
        this.ticks = value
        //
        for (let entry of this.ticks) {
            entry.date = new Date(entry.date );
        }
        console.log(this.ticks);
        this.stockchartData =  this.ticks;
      },
      (error => console.log(error))
    );
    ;

   this.stockchartData =  chartData;
   this.stockchartData =  chartData;
    this.title = 'NSE:INFY';
    this.primaryXAxis = {
      valueType: 'DateTime',
      crosshairTooltip: {enable:true},
      intervalType:'Auto'
    };
    this.primaryYAxis = {
      majorTickLines: { color: 'transparent', width: 0 },
      crosshairTooltip: {enable:true},
      intervalType:'Auto'
    };
    this.crosshair= {
      enable: true
    };
  }

}
