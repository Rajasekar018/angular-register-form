import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightComponent } from './right/right.component';
import { MiddleComponent } from './middle/middle.component';
import { LeftComponent } from './left/left.component';
import { PracticeComponent } from './practice/practice.component';


@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    MiddleComponent,
    LeftComponent,
    PracticeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
