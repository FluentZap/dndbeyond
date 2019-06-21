import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// declare var variableName: any;
// import * as variable from 'bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CharactersComponent } from './characters/characters.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { DynamicNavComponent } from './nav-bar/dynamic-nav/dynamic-nav.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from 'src/api_keys';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CharactersComponent,
    WelcomeComponent,
    FooterComponent,
    DynamicNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
