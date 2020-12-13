import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1 = [100, 200, 300];
  public title1 = 'Sales';

  public labels2 = ['Download Invoices', 'In-Store Invoices', 'Mail-Order Invoices'];
  public data2 = [720, 125, 90];
  public title2 = 'Invoices';


}









