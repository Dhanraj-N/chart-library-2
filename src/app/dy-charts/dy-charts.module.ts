import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DyChartsRoutingModule } from './dy-charts-routing.module';
import { DyChartsComponent } from './dy-charts.component';
import { DyBarComponent } from './dy-bar/dy-bar.component';
import { DyDoughnutComponent } from './dy-doughnut/dy-doughnut.component';


@NgModule({
  declarations: [
    DyChartsComponent,
    DyBarComponent,
    DyDoughnutComponent
  ],
  imports: [
    CommonModule,
    DyChartsRoutingModule
  ]
})
export class DyChartsModule { }
