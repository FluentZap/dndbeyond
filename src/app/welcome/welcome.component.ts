import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FiredataService } from '../services/firedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  articles = [];
  
  constructor(private firedata: FiredataService) {
    firedata.getArticles().subscribe(items => {
      this.articles = items;
    });
   }

  ngOnInit() {
  }

}
