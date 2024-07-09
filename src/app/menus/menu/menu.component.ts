import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  // A revoir cette partie du menu responsive
  menu = 'close';
  @ViewChild('navLink') navLink: ElementRef | undefined;

  onToggleMenu(){
    this.menu = this.menu === 'menu' ? 'close' : 'menu';
    
  }
  
}
