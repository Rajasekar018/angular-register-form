import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student-interface';

@Component({
  selector: 'student-list',
  templateUrl: './studentlist.component.html',
  styles: [ `a{text-decoration:none;color: black;display:block;padding:15px;}ul{padding:0;}li{list-style:none;}.w-50{display:inline-block;width:45%;cursor:pointer}li:hover{background:#eee}.text-right{text-align: right;}.text-center{text-align: center;}` ]
})
export class StudentListComponent implements OnInit  {

  studentList!: Student[];
  studentForm: any;
  resetForm: any;
  msg: string | undefined;
  router: any;

  
  constructor(private studentService: StudentService){}

    ngOnInit(){
      this.studentList = this.studentService.getStudents();

      
     
    }

    
    
    removeItem(i: any) {
      this.studentList.splice(i, 1);
      localStorage.removeItem(i);
      localStorage.setItem("tabledata", JSON.stringify(this.studentService.studentList));
      alert('remove  successfully!');
    }

    editItem(_student:any, i:any){
       
       this.studentList.splice(_student,i);
      
       
    }

    

}
    