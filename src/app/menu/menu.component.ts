import { DOCUMENT } from '@angular/common';
import { AfterContentInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements AfterContentInit{
  abriuMenuHamburguer:boolean = false;
  @ViewChild('listdropdown', { static: false }) listDropDown: any;

  ngAfterContentInit():void{
    if(this.listDropDown != undefined || this.listDropDown != null){
      for(let link of this.listDropDown.nativeElement.children){
        link.addEventListener("mouseover", () => { 
          (link as HTMLElement).style.backgroundColor = "#318a8a"
        });
      }
    }
  }

  public manageMenu():void{
    this.abriuMenuHamburguer = !this.abriuMenuHamburguer;
  }

}
