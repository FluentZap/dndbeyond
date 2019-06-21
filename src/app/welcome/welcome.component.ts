import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FiredataService } from '../services/firedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  featuredArticle = {};
  topArticles = [];
  pastArticles = [];
  
  constructor(private firedata: FiredataService) {
    firedata.getArticles().subscribe(items => {
      if (items && items.length > 0) {                
        items.sort( (a, b) => {
          return b['posted']['seconds'] - a['posted']['seconds'];
        });        
        console.log(items);
        
        this.featuredArticle = items[0];
        this.topArticles = items.slice(1, 3);
        this.pastArticles = items.slice(3, 9);
      }
    });
   }

  ngOnInit() {
  }

}
