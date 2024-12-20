import { Component, OnInit } from '@angular/core';
import { gerarUrlWhatsApp } from '../utils/utiil';

@Component({
  selector: 'app-argumentos',
  standalone: true,
  templateUrl: './argumentos.component.html',
  styleUrl: './argumentos.component.css'
})
export class ArgumentosComponent implements OnInit{
  urlWhatsApp:string;

  ngOnInit(): void {
    this.urlWhatsApp = gerarUrlWhatsApp();
  } 
}
