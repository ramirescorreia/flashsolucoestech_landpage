import { Component, inject, OnInit } from '@angular/core';
import { gerarUrlWhatsApp } from '../utils/utiil';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  gtmService = inject(GoogleTagManagerService);
  router = inject(Router);
  urlWhatsApp:string;

  ngOnInit(): void {
    this.urlWhatsApp = gerarUrlWhatsApp();
  }
  
  openWhatsApp(){
    const gtmTag = {
      event: 'button-click',
      data: 'whatsappAboutButton',
    };
    this.gtmService.pushTag(gtmTag);
  }
}
