import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-nav',
  templateUrl: './dynamic-nav.component.html',
  styleUrls: ['./dynamic-nav.component.css']
})
export class DynamicNavComponent implements OnInit {
  @Input() openMenu: string;

  constructor() { }

  //hoverOn: boolean = true;
  ngOnInit() {    
  }

}
