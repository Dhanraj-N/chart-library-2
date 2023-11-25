import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { IchartDataset } from '../Model/chart';

@Component({
  selector: 'dy-doughnut',
  templateUrl: './dy-doughnut.component.html',
  styleUrls: ['./dy-doughnut.component.scss']
})
export class DyDoughnutComponent {

  @Input() labels !: Array<string>;
  @Input() datasets !: Array<IchartDataset>;

  @ViewChild('doughnutchart') doughnut!: ElementRef<HTMLCanvasElement>

  ngAfterViewInit(): void {
    // console.log(this.barchart.nativeElement);
    this.createChart()
  }

  createChart(){
    let barchartElement = this.doughnut.nativeElement
     new Chart(barchartElement, {
      type: 'doughnut', //this denotes the type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  
}
