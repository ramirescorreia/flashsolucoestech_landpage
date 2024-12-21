import { Component, inject, OnInit } from '@angular/core';
import { gerarUrlWhatsApp } from '../utils/utiil';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { Router } from '@angular/router';

@Component({
  selector: 'app-argumentos',
  standalone: true,
  templateUrl: './argumentos.component.html',
  styleUrl: './argumentos.component.css'
})
export class ArgumentosComponent implements OnInit{
  gtmService = inject(GoogleTagManagerService);
  router = inject(Router);
  urlWhatsApp:string;

  ngOnInit(): void {
    this.urlWhatsApp = gerarUrlWhatsApp();
  }
  
  openWhatsApp(){
    const gtmTag = {
      event: 'button-click',
      data: 'whatsappArgButton',
    };
    this.gtmService.pushTag(gtmTag);
  }
}
