import { Component, OnInit } from '@angular/core';
import { PersonalityService } from '../personality.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  screen_name : string;
  jsondata : any;
  words : number;
  panels : Array<Object>;
  personality : any;
  consumptionPref : any;
  needs : any;
  values : any;
  chartOptions = {
    responsive: true
  };

  buildChart(){

  }
  chartData =  [6.984, 20.561, 25.801, 56.972];
  chartLabels = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreableness'];

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
            this.needs["name"] = "Needs";
            ans.push(this.needs);
            this.consumptionPref = this.jsondata.consumption_preferences;
            this.personality = this.jsondata.personality;
            this.personality["name"] = "Personality";
            ans.push(this.personality);
            this.values = this.jsondata.values;
            this.values["name"] = "Values";
            ans.push(this.values);
            this.panels = ans;
          }
        )
      }
  }

  constructor(
    private personalityService: PersonalityService
  ) {

  }

  ngOnInit() {
  }

}
