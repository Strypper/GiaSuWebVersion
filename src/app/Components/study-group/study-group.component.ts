import { Component, OnInit, Input } from '@angular/core';
import { StudyGroup } from 'src/app/Models/StudyGroup';

@Component({
  selector: 'app-study-group',
  templateUrl: './study-group.component.html',
  styleUrls: ['./study-group.component.css']
})
export class StudyGroupComponent implements OnInit {
  @Input() isSelected: boolean = false;
  @Input() studyGroupInput: StudyGroup; 
  constructor() { }

  ngOnInit(): void {
  }
  isSelectedClick(){
    if(!this.isSelected){
      this.isSelected = true;
      console.log(this.isSelected);
    }
    else{
      this.isSelected = false;
      console.log(this.isSelected);
    }
  }
}
