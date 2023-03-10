import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentListComponent } from './studentlist/studentlist.component';

const routes: Routes = [

  { path: '',
  redirectTo: '/students',
  pathMatch: 'full'
},
  { path: 'student-add', component: StudentAddComponent },
  
  {path: 'student-view', component:StudentViewComponent},
  { path: 'student-view/:id',      component: StudentViewComponent },
  
  {
    path: 'students',
    component: StudentListComponent
  },
  { path: 'student-edit', component:  StudentEditComponent },
  {path: 'student-edit/:id', component: StudentEditComponent },
  { path: 'student-add/:id', component: StudentAddComponent },
  {
    path: 'students',
    component: StudentListComponent
  },
  {
    path:'students/:id',component:StudentListComponent
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
