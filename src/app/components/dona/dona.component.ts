import { Component, Input, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() public title: string;
  @Input() public data: number[] = [];
  @Input() public labels: string[] = [];



  public doughnutChartLabels: Label[] = [...this.labels];
  public doughnutChartData: MultiDataSet = [
    [...this.data],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartData = [
      [...this.data]
    ]

    this.doughnutChartLabels = this.labels;
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public colors: Color[] = [
    { backgroundColor: ['#6857E7', '#009FEE', '#F02059'] }
  ]

}
