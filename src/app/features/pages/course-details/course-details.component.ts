import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit{

  courseId?: string | null;

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.paramMap.subscribe(params => {
      this.courseId = params.get('id')
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
