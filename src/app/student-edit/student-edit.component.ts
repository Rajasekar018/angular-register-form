import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentForm: any;
  msg: string | undefined;
  studentList: any;
  resetForm: any;
  isEdit: boolean = false;
  

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
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
        } else this.router.navigate(['/student-edit']);
      }
    });
 
  }
   editItem(){
      
      if (this.studentForm.valid) {
        //  this.studentService.studentList.push(this.studentForm.value);

        let indexToUpdate = this.studentService.studentList.findIndex(item => item.id === this.studentForm.value.id);
        this.studentService.studentList[indexToUpdate] = this.studentForm.value;
      
        localStorage.setItem('formdata',JSON.stringify(this.studentService.studentList))
        this.resetForm();
        console.log(
          'this.studentService.studelost',
          this.studentService.getStudents(),
          
        );
        
      }
    }

}
