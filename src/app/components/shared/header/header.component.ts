import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatBadgeModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title: string = '';
  subtitle: string = '';

  constructor(
    private router: Router,
  ) {
    this.checkRouter();
  }

  checkRouter() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        let route: ActivatedRoute = this.router.routerState.root;
        let title, subtitle = '';
        while (route!.firstChild) {
          route = route.firstChild;
        }
        if (route.snapshot.data['title']) {
          title = route!.snapshot.data['title'];
          subtitle = route!.snapshot.data['subtitle'];
        }
        return [title, subtitle];
      })
    ).subscribe((obj: any) => {
      this.title = obj[0];
      this.subtitle = obj[1];
    });
  }
}
