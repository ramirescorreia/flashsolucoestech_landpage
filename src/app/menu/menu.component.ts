import { DOCUMENT } from '@angular/common';
import { Component, inject} from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  abriuMenuHamburguer:boolean = false;
  document = inject(DOCUMENT);


  public manageMenu():void{
    this.abriuMenuHamburguer = !this.abriuMenuHamburguer;
    let listDropDown = this.document.getElementById("listdropdown");
    if(this.abriuMenuHamburguer){
      (listDropDown as HTMLElement).style.display = "block";
      return;
    }
    (listDropDown as HTMLElement).style.display = "none";
  }
}
