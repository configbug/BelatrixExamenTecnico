import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.route';

import { CambiomonedaModule } from './pages/cambiomoneda/cambiomoneda.module';

import { DataService } from './core/service/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //FormsModule, 
    //ReactiveFormsModule,
    AppRoutingModule,
    CambiomonedaModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
