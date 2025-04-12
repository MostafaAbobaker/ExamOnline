import { Component, OnInit } from '@angular/core';
import { ExamsService } from '../../services/exams.service';
import { error } from 'console';
import { SubjectsService } from '../../services/subjects.service';
import { Subject } from 'rxjs';
import { subjectItem } from '../../interface/subjects';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  imports: [CommonModule , RouterModule],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.scss'
})
export class QuizzesComponent implements OnInit{
  allSubjects:number  | undefined= 6;
  SubjectsList?:subjectItem [];
  showAllList:boolean =false;
  constructor(private _SubjectsService:SubjectsService) {

  }
  ngOnInit(): void {
    this.getSubjects(this.allSubjects);
  }

  getSubjects(num:number | undefined) {
    this._SubjectsService.getSubjects(num).subscribe({
      next:(res)=>{
        console.log('Subjects =>' , res)
        this.SubjectsList = res.subjects
      },
        error:(err)=>{console.log(err)},
    })
  }

  viewAllSubjects() {
    this.getSubjects(undefined);
    this.showAllList= !this.showAllList;
  }
  viewLessSubjects() {
    this.getSubjects(this.allSubjects);
    this.showAllList= !this.showAllList;

  }
}
