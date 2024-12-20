import { Component, OnInit } from '@angular/core';
import { gerarUrlWhatsApp } from '../utils/utiil';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  urlWhatsApp:string;

  ngOnInit(): void {
    this.urlWhatsApp = gerarUrlWhatsApp();
  } 
}
