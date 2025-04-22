import { Component, Input, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { AnswerUserExam, QuestionsInterface } from '../../interface/questions';
import { RouterModule } from '@angular/router';
import { DialogFinalExamComponent } from '../dialog-final-exam/dialog-final-exam.component';

@Component({
  selector: 'app-dialog-chart',
  imports: [DialogModule, ChartModule, RouterModule , DialogFinalExamComponent],
  templateUrl: './dialog-chart.component.html',
  styleUrl: './dialog-chart.component.scss'
})
export class DialogChartComponent implements OnInit {
  @Input() dialogChart!: boolean ;
  @Input()  questionsList:QuestionsInterface [] = []
  @Input()  answerError:AnswerUserExam[] =[];

  Correct! :number;
  Incorrect! :number;

  finalExam: boolean = false;

  data: any ;

    options: any;

    ShowResults(){
      this.dialogChart = false;
      this.finalExam = true;
    }


    ngOnInit() {
      this.Correct = this.questionsList.length - this.answerError.length;
      this.Incorrect = this.answerError.length;

        this.initChart();
        console.log(this.Correct , this.Incorrect);
    }

    initChart() {
      debugger
            this.data = {
                labels: ['Correct', 'Incorrect'],

                datasets: [
                    {
                        data: [this.Correct,this.Incorrect],
                        backgroundColor: ['#4461F2','#CC1010'],
                        hoverBackgroundColor: ['#0456f9', '#f82323'],
                    }
                ]
            };

            this.options = {
                cutout: '90%',
                cutoutPercentage: 40,
                display: true,
                responsive: true,
                align: 'end',
                plugins: {
                  legend: {
                    position: 'right',
                    align: 'center',
                    fullWidth: true,
                    display: true,

                    maintainAspectRatio: false,
                    labels: {
                      boxWidth: 5,
                      usePointStyle: true, // circle points

                    },
                  },
                },



            };

    }
}
