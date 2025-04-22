import { Component } from '@angular/core';
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { SubjectsComponent } from '../subjects/subjects.component';

@Component({
  selector: 'app-dashboard',
  imports: [UserProfileComponent, SubjectsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
