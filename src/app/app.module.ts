import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import {ReadModule} from './tutorials/read/read.module';
// import { CreateModule } from './tutorials/create/create.module';
import { TutorialModule } from './tutorials/tutorial.module';
import {MaterialModule} from './shared/material.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Ngrx
import {StoreModule, Store} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// import { ReadComponent } from './read/read.component';
// import { CreateComponent } from './create/create.component';
import {environment} from './../environments/environment.prod';
import { TutorialData } from './tutorial.data';
import { reducer } from './state/app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    TutorialModule,
    StoreModule.forRoot({
      appState: reducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name : 'Tutorial Devtools',
      maxAge: 25,
      logOnly : environment.production
    }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TutorialData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
