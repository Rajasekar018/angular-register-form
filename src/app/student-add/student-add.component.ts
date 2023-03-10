import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'student-add',
  templateUrl: './student-add.component.html',
  styles: [`input{width:100%;padding: 10px 15px;margin:5px auto;}`],
})

export class StudentAddComponent implements OnInit {
  studentForm!: FormGroup;
  isEdit: Boolean = false;
  msg: String = '';
  studentList: any;
  getStudents: any;
  submitted=false;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.studentForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      id: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ),
      password:new FormControl ('', [Validators.required,Validators.minLength(8)]),
      address: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),

    });
       
 // get localstorage value
        
 let editdatalist:any = localStorage.getItem('formdata')
 console.log(editdatalist)
 let data =JSON.parse(editdatalist) 
 console.log(data)
 for(let i=0; i<data.length; i++) 
 {
  console.log(data[i]) 
  this.studentService.studentList.push(data[i]);
 }

 

    this.route.params.subscribe((param) => {
      console.log(param);
      if (param && param['id']) {
        let student = this.studentService.getStudent(param['id']);
        if (student) {
          this.studentForm.setValue(student);
          this.isEdit = true;
        } else this.router.navigate(['/students']);
      }
    });
  }

  resetForm(){
    console.log('reset', this.studentForm);
    this.studentForm.reset();
  }

  add() {
    
    this.submitted=true;
      if (this.studentForm.valid) {
      this.studentService.studentList.push(this.studentForm.value);
      localStorage.setItem('formdata',JSON.stringify(this.studentService.studentList))
      this.resetForm();
      console.log(
        'this.studentService.studelost',
        this.studentService.getStudents()
      );
      this.msg = 'Saved successfully';
    }  else {
      this.msg = 'Please complete form';
    }
  }
}


  

