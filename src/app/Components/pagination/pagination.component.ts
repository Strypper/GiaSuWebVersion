import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  numberOfCollegeSubjectRequestPages: number[] = [];
  totalCollegeRequestPages: number;


  constructor(private _http:HttpService) { }

  ngOnInit(): void {
    const url = "/api/CollegeSubjectControllers/NumberOfRecord";
    this._http.basicHttpGetRequest(url).subscribe(data => {
      this.totalCollegeRequestPages = <number>data / 24;
      for(let i = 1; i < this.totalCollegeRequestPages + 1; i ++){
        this.numberOfCollegeSubjectRequestPages.push(i);
      }
      console.log(this.numberOfCollegeSubjectRequestPages);
    });
  }
}
