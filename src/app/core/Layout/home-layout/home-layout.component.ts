import { Component } from '@angular/core';
import { SidebarComponent } from "../../../shared/components/ui/sidebar/sidebar.component";
import { HeaderComponent } from '../../../shared/components/ui/header/header.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from "../../../shared/components/ui/loader/loader.component";

@Component({
  selector: 'app-home-layout',
  imports: [SidebarComponent, HeaderComponent, RouterModule, LoaderComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

}
