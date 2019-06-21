import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FiredataService {  
  constructor(private database: AngularFirestore) {}
       
  getArticles() {
     return this.database.collection('articles').valueChanges();
   }
}
