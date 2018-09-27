import { Component, OnInit, Input } from '@angular/core';
import { PersonalityService } from '../personality.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  @Input() screen_name : string;
  jsondata : any;
  words : number;
  panels : any;
  personality : any;
  consumptionPref : any;
  needs : any;
  values : any;
  chartDataObj =  {};
  chartLabelsObj = {};
  chartOptions = {
    responsive: true
  };

  buildChart(){
    this.panels.forEach((arr)=>{
        var data = new Array();
        var labels = new Array();
        var name = "";
        arr.forEach((obj)=>{
            labels.push(obj.name);
            data.push(obj.percentile);
            name = obj.category;
        });
        this.chartDataObj[name] = data;
        this.chartLabelsObj[name]= labels;

    });
  }


  onChartClick(event) {
    console.log(event);
  }

  saveUsername(username){
    if(username!= undefined){
        this.screen_name = username.value;
        var ans = new Array();
        this.personalityService.getPersonality(username.value).then(
          (results)=>{
            this.jsondata = results;
            this.words = this.jsondata.word_count;
            this.needs = this.jsondata.needs;
            ans.push(this.needs);
            this.consumptionPref = this.jsondata.consumption_preferences;
            this.personality = this.jsondata.personality;
            ans.push(this.personality);
            this.values = this.jsondata.values;
            ans.push(this.values);
            this.panels = ans;
            this.buildChart();
          }
        )
      }
  }

  constructor(private personalityService: PersonalityService) {}

  ngOnInit() {}

}
