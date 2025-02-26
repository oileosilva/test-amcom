import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { LoaderService } from './services/shared/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    HeaderComponent,
    LoaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  constructor(
    private loader: LoaderService,
  ){
    this.loader.stopLoading();
  }
}
