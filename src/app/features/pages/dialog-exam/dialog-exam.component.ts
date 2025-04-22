import { Component, Input, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { exams } from '../../interface/exams';
import { ExamsService } from '../../services/exams.service';
import { AnswersInterface, AnswerUserExam, QuestionsInterface } from '../../interface/questions';
import { TimerService } from '../../services/timer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogChartComponent } from '../dialog-chart/dialog-chart.component';

@Component({
  selector: 'app-dialog-exam',
  imports: [DialogModule, CommonModule , FormsModule , RadioButtonModule , DialogChartComponent ],
  templateUrl: './dialog-exam.component.html',
  styleUrl: './dialog-exam.component.scss'
})
export class DialogExamComponent implements OnInit{
  @Input() visibleDialog: boolean = false;
  @Input() examId?:string
  dialogChart: boolean = false;
  visibleExam:boolean= false;
  questionsList:QuestionsInterface [] = []

  Correct:number = 0;
  Incorrect:number = 0;

  remainingTime:number = 2;
  selectQuestion:number = 0;

  RadioButtonValue: string | undefined

  answerUserExam:AnswerUserExam[] =[];
  answerError:AnswerUserExam[] =[];


  @Input() minutes: number = 0; // Set initial minutes
  seconds: number = 0; // Set initial seconds
  private timerInterval: any; // Reference to the interval



  constructor(private _examsService:ExamsService , private _timerService:TimerService){}
  ngOnInit(): void {

  }

  startExam() {
    this.startTimer(); // Start the timer when the exam starts
    this.visibleDialog = false;
    this.visibleExam = true;
    if(this.examId) {
      this._examsService.getAllQuestionsExam(this.examId).subscribe({
        next:(res)=>{
          this.questionsList = res.questions;
          console.log(this.questionsList);

        },
        error:(err)=>{
          alert(err)
        }

      })
    }
  }


  andAnswer(): void {
    if (this.RadioButtonValue) {
      // Validate index bounds to avoid accessing out-of-bounds elements
      if (this.selectQuestion >= 0 && this.selectQuestion < this.questionsList.length) {
        const matchedAnswer = this.questionsList[this.selectQuestion].answers.find(
          (item) => item.answer === this.RadioButtonValue
        );
          this.answerUserExam.push({

          id: this.questionsList[this.selectQuestion]._id,
          question: this.questionsList[this.selectQuestion].question,
          correctAnswer: this.questionsList[this.selectQuestion].correct,
          answers: this.questionsList[this.selectQuestion].answers,
          answerUser: this.RadioButtonValue,
          answerUserKey: matchedAnswer ? matchedAnswer.key : null // Add key of Radio
        });


        // Increment the question index, ensuring it doesn't exceed bounds
        if (this.selectQuestion < this.questionsList.length - 1) {
          this.selectQuestion++;
        }

        // Reset the selected Radio Button value
        this.RadioButtonValue = undefined;
      }
    }
  }
  backQuestion() {
    if (this.selectQuestion > 0) {

      this.selectQuestion--;

      this.RadioButtonValue = this.answerUserExam[this.selectQuestion].answerUser

    }
  }
  FinishExam() {
    this.andAnswer()
    this.answerError= this.answerUserExam.filter((item)=> item.correctAnswer !== item.answerUserKey)
    console.table(this.answerError);
    this.visibleExam = false;
    this.dialogChart = true;
    this.Correct = this.questionsList.length - this.answerError.length;
    this.Incorrect = this.answerError.length;
    console.log(this.Correct , this.Incorrect);
  }

  startTimer() {
    debugger
    this.timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.stopTimer(); // Stop timer when it reaches 0
          console.log('Time is up!');
        }
      } else {
        this.seconds--;
      }
    }, 1000); // Execute every 1 second
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  ngOnDestroy() {
    this.stopTimer(); // Ensure timer is cleared on component destroy
  }

}
