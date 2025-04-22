import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectsService } from '../../services/subjects.service';
import { exams } from '../../interface/exams';
import { subjectItem } from '../../interface/subjects';
import { CommonModule } from '@angular/common';
import { DialogExamComponent } from "../dialog-exam/dialog-exam.component";
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule, DialogExamComponent, DialogModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit{
  examDuration!:number ;
  courseId?: string | null;
  examsList:exams [] =[];
  subjectsItem?:subjectItem ;
  visibleDialog:boolean = false;
  examId?:string
  constructor(private _activatedRoute: ActivatedRoute , private _subjectsService:SubjectsService) {
    this._activatedRoute.paramMap.subscribe(params => {
      this.courseId = params.get('id')
    })
  }
  ngOnInit(): void {
    if(this.courseId) {
      this._subjectsService.getAllExams(this.courseId).subscribe({
        next:(res)=>{
          console.log(res);
          this.examsList = res.exams
        },
        error:(err)=>{
          alert(err)
        }
      })
      this._subjectsService.getSingleSubject(this.courseId).subscribe({
        next:(res)=>{
          console.log('getSingleSubject',res);
          this.subjectsItem = res.category
        },
        error:(err)=>{alert(err)}
      })
    }

  }
  showDialog(id:string , duration:number) {
    this.examDuration = duration ;
    this.examId = id;
    this.visibleDialog = true;
    console.log(this.examId , this.examDuration);

  }
}
