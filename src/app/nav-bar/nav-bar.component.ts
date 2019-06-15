import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  openMenu: string;
  onMenuCategory: boolean
  onMenuPanel:boolean
  menus: string[] = ['Creations', 'Game Rules', 'Sources', 'Tools', 'Marketplace', 'Media', 'Forums'];

  constructor() { }

  ngOnInit() {    
  }

  onCategory(item) {
    if (item === null) {
      this.onMenuCategory = false;
      this.checkForOpen();
      return;
    }
    this.openMenu = item;
    this.onMenuCategory = true;
  }

  onMenu(value) {
    this.onMenuPanel = value;
    this.checkForOpen();
  }

  checkForOpen() {
    if (!this.onMenuCategory && !this.onMenuPanel) {
      this.openMenu = null;
    }
  }

}
