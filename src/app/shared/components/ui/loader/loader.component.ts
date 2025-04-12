import { Component, inject } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  loaderService$ = inject(LoaderService);

  isLoading : Subject<boolean> = this.loaderService$.isLoading;

}
