import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private _localStorageService:LocalStorageService, private _router:Router) {}
  logout() {
    this._localStorageService.clear();

    this._router.navigate(['/login']);
  }
}
