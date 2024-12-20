import { Component, OnInit } from '@angular/core';
import { gerarUrlWhatsApp } from '../utils/utiil';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  urlWhatsApp:string;
  
  ngOnInit(): void {
    this.urlWhatsApp = gerarUrlWhatsApp();
  }
}
