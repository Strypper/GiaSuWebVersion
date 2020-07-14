import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../app/Services/http.service';
import { CollegeSubjectRequest } from './Models/CollegeSubjectRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gia Su';
  CollegeSubjectsRequest: CollegeSubjectRequest[];

  constructor(private _http:HttpService){}
  ngOnInit(){
    const url = `/api/CollegeSubjectControllers/RequestCollegeSubjectsPage/0`;
    this._http.getFromPublicApi<CollegeSubjectRequest[]>(url).subscribe(data => {
      this.CollegeSubjectsRequest = data;
      console.log(this.CollegeSubjectsRequest);
    });
  }
}
