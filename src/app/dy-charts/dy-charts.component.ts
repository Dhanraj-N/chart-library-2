import { Component } from '@angular/core';
import { IchartDataset } from '../dy-charts/Model/chart';
@Component({
  selector: 'app-dy-charts',
  templateUrl: './dy-charts.component.html',
  styleUrls: ['./dy-charts.component.scss']
})
export class DyChartsComponent {

  public barLabels: Array<string> = ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Typescript', 'Angular', 'nodejs'];
  public barDatasets: Array<IchartDataset> = [
    {
      label: 'Skill Percentage',
      data: [10, 45, 74, 54, 69, 32, 14],

      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(51, 245, 44, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 109, 88, 1)'
      ],
      borderWidth: 1
    }
  ]

  // doughnut chart Data

  public doughnutLabels: Array<string> = ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Typescript', 'Angular', 'nodejs'];
  public doughnutDatasets: Array<IchartDataset> = [
    {
      label: 'Skill Percentage',
      data: [10, 45, 74, 54, 69, 32, 14],

      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(51, 245, 44, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 109, 88, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Skill Rating',
      data: [15, 35, 14, 94, 28, 82, 74],

      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(51, 245, 44, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 109, 88, 1)'
      ],
      borderWidth: 1
    }
  ]

}
