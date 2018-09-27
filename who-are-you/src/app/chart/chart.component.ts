import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() chartData : number[];
  @Input() chartLabels :string[];
  chartOptions = {
    responsive: true
  };
  onChartClick(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
