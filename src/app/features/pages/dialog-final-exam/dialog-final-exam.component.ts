import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { AnswerUserExam } from '../../interface/questions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-final-exam',
  imports: [RouterModule, DialogModule , FormsModule],
  templateUrl: './dialog-final-exam.component.html',
  styleUrl: './dialog-final-exam.component.scss'
})
export class DialogFinalExamComponent implements OnInit {

  @Input()  finalExam: boolean = false;
  @Input()  answerError:AnswerUserExam[] =[];
  ngOnInit(): void {
    console.table(this.answerError);

  }
}
