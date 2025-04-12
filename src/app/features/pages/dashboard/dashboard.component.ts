import { Component } from '@angular/core';
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { QuizzesComponent } from "../quizzes/quizzes.component";

@Component({
  selector: 'app-dashboard',
  imports: [UserProfileComponent, QuizzesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
