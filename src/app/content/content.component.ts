import { Component, inject, OnInit } from '@angular/core';
import { gerarUrlWhatsApp } from '../utils/utiil';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  gtmService = inject(GoogleTagManagerService);
  router = inject(Router);
  urlWhatsApp:string;
  
  ngOnInit(): void {
    this.urlWhatsApp = gerarUrlWhatsApp();
  }

  openWhatsApp(){
    const gtmTag = {
      event: 'button-click',
      data: 'whatsappContentButton',
    };
    this.gtmService.pushTag(gtmTag);
  }
}
