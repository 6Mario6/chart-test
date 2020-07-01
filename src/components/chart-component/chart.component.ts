import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {COLORS} from './colors.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series 1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series 2' },
    { data: [27, 60, 32, 55, 41, 11, 33], label: 'Series 3' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {}
  };
  public lineChartColors: Color[] = COLORS;
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [ChartDataLabels];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
  }

  public addData(): void {
    if (this.lineChartData.length < 8) {
      const arr = [];
      for (let i = 0; i < 7; i++) {
        arr.push(Math.floor(Math.random() * 90) + 1);
      }
      this.lineChartData.push({ data: arr, label: `Series ${this.lineChartData.length + 1}` });
      this.chart.update();
    }
  }

  public removeData(): void {
    if (this.lineChartData.length > 0) {
      this.lineChartData.pop();
      this.chart.update();
    }
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }


  public changeColor(): void {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel(): void {
    console.log(this.lineChartPlugins);
  }

}
