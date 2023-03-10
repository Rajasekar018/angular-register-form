

import { Component, NgModule, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student-interface';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'student-view',
  templateUrl: './student-view.component.html',
  styles: [``]
})
export class StudentViewComponent implements OnInit {

  isEdit: Boolean = false;
  student!: Student;
  studentForm: any;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
   
    this.studentForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      id: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ),
      password:new FormControl ('', [Validators.required,Validators.minLength(8)]),
      address: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),

    });

   
    this.route.params.subscribe((param) => {
      console.log(param);
      if (param && param['id']) {
        let student = this.studentService.getStudent(param['id']);
        if (student) {
          this.studentForm.setValue(student);
          this.isEdit = true;
        } else this.router.navigate(['/student-view']);
      }
    });
    
  }
  
  


}


