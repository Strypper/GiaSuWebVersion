import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeSubjectRequestComponent } from './college-subject-request.component';

describe('CollegeSubjectRequestComponent', () => {
  let component: CollegeSubjectRequestComponent;
  let fixture: ComponentFixture<CollegeSubjectRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeSubjectRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeSubjectRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
