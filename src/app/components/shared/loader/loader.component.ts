import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from '../../../services/shared/loader.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  constructor(
    public loaderService: LoaderService
  ) { }

  @Input() loadingFull: boolean = false;
}
