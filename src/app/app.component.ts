 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 

 
declare var NgForm:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  
  index: any;
  listDataIndex: any;
  listData: any=[];

  constructor(private formBuilder: FormBuilder) { 

  }

  

 
  ngOnInit() {

  this.registerForm = this.formBuilder.group({
  fullName: ['', Validators.required],
  email: ['', [Validators.required,Validators.email]],
  phone: ['', Validators.required],
  password: ['', [Validators.required,Validators.minLength(6)]],
  Address: ['', Validators.required],
  
  
 });


 let editdatalist:any = localStorage.getItem('formdata')
 console.log(editdatalist)
 let data =JSON.parse(editdatalist) 
 console.log(data)
 for(let i=0; i<data.length; i++) 
 {
  console.log(data[i]) 
  this.listData.push(data[i]);
 }
  // console.log(JSON.parse(editdatalist))
  console.log(this.listData)
 
  //localStorage.removeItem('formdata');
 }
 
 
  get fval() {
  return this.registerForm.controls;
  
  }   

  
  
  ADD(){
  this.submitted = true;
  if (this.registerForm.invalid) {
  return;
  }

  
  this.listData.push(this.registerForm.value);

  localStorage.setItem('formdata',JSON.stringify(this.listData))


  this.registerForm.controls["fullName"].setValidators 
  this.registerForm.controls['email'].setValidators 
  this.registerForm.controls['password'].setValidators 
  this.registerForm.controls['phone'].setValidators 
  this.registerForm.controls['Address'].setValidators 
  this .registerForm.reset();
  this.registerForm.controls["fullName"].setErrors(null)
  this.registerForm.controls["email"].setErrors(null)
  this.registerForm.controls["password"].setErrors(null)
  this.registerForm.controls["phone"].setErrors(null)
   this.registerForm.controls["Address"].setErrors(null)
   this.registerForm.controls["Address"].setErrors(null)
  console.log(this.listData)

  alert('form fields are validated successfully!');
  }
//EDIT FUNCTION

  editItem(element: any, index: any) {
    let letindex = index;
    if (element != undefined && element != null && element != '')
      this.registerForm.get('fullName')?.setValue(element['fullName']);
    this.registerForm.get('email')?.setValue(element['email']);
    this.registerForm.get('password')?.setValue(element['password']);
    this.registerForm.get('phone')?.setValue(element['phone']);
    this.registerForm.get('Address')?.setValue(element['Address']);
    this.listData.splice(index, 1);
    
    console.log(this.listData);
    
  }

  removeItem(element: any) {
    this.listData.forEach((value: any, index: any) => {
      if (value == element)
        this.listData.splice(index, 1);
        localStorage.removeItem('0')

        
    });
    alert('remove  successfully!');
  }


}

