import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalityService {
  uri = 'http://localhost:3000/personality';

  constructor(private http: HttpClient) { }

  getPersonality(name) {
    return new Promise((res,rej)=>{
      var result = "None"
      var config = {
        params : {
          screen_name : name
        }
      }
      this.http.get(`${this.uri}`,config).subscribe(data => {
        res(data);
      });

    });
  }

}
