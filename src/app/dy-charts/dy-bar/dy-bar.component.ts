import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'dy-bar',
  templateUrl: './dy-bar.component.html',
  styleUrls: ['./dy-bar.component.scss']
})
export class DyBarComponent implements OnInit, AfterViewInit {
  
  @Input() labels!: string[];
  @Input() datasets!: any[];

  @ViewChild('barchart') barchart!: ElementRef<HTMLCanvasElement>

  constructor() {}

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    // console.log(this.barchart.nativeElement);
    this.createChart()
  }

  createChart(){
    let barchartElement = this.barchart.nativeElement
     new Chart(barchartElement, {
      type: 'bar', //this denotes the type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17'], 
	       datasets: [
           {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'orange'
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

//ng g m hi --route hi --module app.module.ts