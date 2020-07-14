import { Component, OnInit, Input } from '@angular/core';
import { CollegeSubjectRequest } from 'src/app/Models/CollegeSubjectRequest';

@Component({
  selector: 'app-college-subject-request',
  templateUrl: './college-subject-request.component.html',
  styleUrls: ['./college-subject-request.component.css']
})
export class CollegeSubjectRequestComponent implements OnInit {
  
  // @Input('subjectName') SubjectName: string;
  // @Input('schoolName') SchoolName: string;
  // @Input('schoolLogoUrl') SchoolLogoUrl: string;
  // @Input() Price: number;
  // @Input() PaymentTimeType: number;
  
  @Input() CollegeSubject: CollegeSubjectRequest;

  constructor() { }

  ngOnInit(): void {
  }

}
