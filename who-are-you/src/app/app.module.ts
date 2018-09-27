import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { UsernameComponent } from './username/username.component';
import { MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {PersonalityService} from './personality.service'
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
// import * as Watson from "";


// var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3'

const routes : Routes = [
  { path : 'list',
    component : ListComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UsernameComponent,
    ChartComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [PersonalityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
