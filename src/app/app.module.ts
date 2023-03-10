import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './studentlist/studentlist.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { CommonModule } from '@angular/common';


// const appRoutes: Routes = [
//   { path: 'student-add', component: StudentAddComponent },
//   {path: 'student-view', component:StudentViewComponent},
//   { path: 'student/:id',      component: StudentViewComponent },
//   { path: 'student-edit', component:  StudentEditComponent },
//   { path: 'student/:id',      component: StudentViewComponent },
//   {
//     path: 'students',
//     component: StudentListComponent
//   },
//   { path: 'student-add/:id', component: StudentAddComponent },
//   {
//     path: 'students',
//     component: StudentListComponent
//   },
//   { path: '',
//     redirectTo: '/students',
//     pathMatch: 'full'
//   },
//   // { path: '**', component: PageNotFoundComponent }
// ];


@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentListComponent,
    StudentViewComponent,
    StudentEditComponent,
   

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    ReactiveFormsModule,
    HttpClientModule,
   
   
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
