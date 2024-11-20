import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"hsf-pool","appId":"1:406108113311:web:6843f9b94ef18c45a915aa","databaseURL":"https://hsf-pool-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"hsf-pool.firebasestorage.app","apiKey":"AIzaSyCdr5RXRU1pjqVlkPF3Mz3yORRx_p5cn9s","authDomain":"hsf-pool.firebaseapp.com","messagingSenderId":"406108113311"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
