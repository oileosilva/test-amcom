import { Component, Input, input } from '@angular/core';
import { Client, listClient } from '../../../interfaces/admission/client.interface';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-client-info',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.scss'
})
export class ClientInfoComponent {

  @Input() idClient: number | undefined;
  listCliets: Array<Client> = listClient;
  clientSelected: Client | undefined;

  ngOnChanges() {
    if (this.idClient != 0) {
      this.clientSelected = this.listCliets.find(client => client.id == this.idClient);
    } else
      this.clientSelected = undefined;

  }
}
