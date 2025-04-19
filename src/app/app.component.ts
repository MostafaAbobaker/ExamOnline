import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { initAuth } from './store/auth.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ExamOnline';
  constructor(private store: Store) { }
  ngOnInit(): void {
    this.store.dispatch(initAuth());
  }
}
