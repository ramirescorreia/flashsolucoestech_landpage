import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  gtmService = inject(GoogleTagManagerService);
  router = inject(Router);
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.gtmService.pushTag({ event: 'page', pageName: this.router.url });
    });
  }
}
