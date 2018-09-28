import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // init personality response to null;
  title = 'Twitter-Personality';
}
