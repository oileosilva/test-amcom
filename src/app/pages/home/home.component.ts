import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  timeDay = '';
  today = new Date();

  ngOnInit() {
    let hour = this.today.getHours();
    if (hour >= 0 && hour < 6)
      this.timeDay = 'Boa madrugada';
    else if (hour >= 6 && hour < 12)
      this.timeDay = 'Bom dia';
    else if (hour >= 12 && hour < 18)
      this.timeDay = 'Boa tarde';
    else if (hour >= 18 && hour < 24)
      this.timeDay = 'Boa noite';
  }
}
