import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ChartModule, ChartAllModule, StockChartAllModule, CandleSeriesService} from '@syncfusion/ej2-angular-charts';
import { DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService} from '@syncfusion/ej2-angular-charts';
import {HttpClientModule} from "@angular/common/http";
import {RangeNavigatorModule } from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, PeriodSelectorService} from '@syncfusion/ej2-angular-charts';
/**
 * Module
 */
@NgModule({
  imports: [
    BrowserModule, ChartModule, StockChartAllModule, ChartAllModule,HttpClientModule,RangeNavigatorModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ AreaSeriesService,PeriodSelectorService,CandleSeriesService ,DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService,HttpClientModule,PeriodSelectorService]
})
export class AppModule { }
