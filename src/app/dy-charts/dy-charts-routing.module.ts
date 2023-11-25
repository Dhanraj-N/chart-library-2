import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DyChartsComponent } from './dy-charts.component';

const routes: Routes = [{ path: '', component: DyChartsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DyChartsRoutingModule { }
