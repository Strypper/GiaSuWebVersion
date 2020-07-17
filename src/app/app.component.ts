import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../app/Services/http.service';
import { CollegeSubjectRequest } from './Models/CollegeSubjectRequest';
import { StudyGroup } from './Models/StudyGroup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gia Su';
  CollegeSubjectsRequest: CollegeSubjectRequest[];
  CollegeStudyGroups: StudyGroup[];
  CollegeSubjectSuggestion: string[] = ['Angular', 'React', 'Vue'];

  constructor(private _http:HttpService){}
  ngOnInit(){
    const CollegeSubjectPageUrl = `/api/CollegeSubjectControllers/RequestCollegeSubjectsPage/0`;
    const CollegeStudyGroupUrl = `/api/CollegeSubjectControllers/StudyGroupList`;
    this._http.getFromPublicApi<CollegeSubjectRequest[]>(CollegeSubjectPageUrl).subscribe(data => {
      this.CollegeSubjectsRequest = data;
      console.log(this.CollegeSubjectsRequest);
    });
    this._http.getFromPublicApi<StudyGroup[]>(CollegeStudyGroupUrl).subscribe(data => {
      this.CollegeStudyGroups = data;
      console.log(this.CollegeStudyGroups);
    });
  }
}
