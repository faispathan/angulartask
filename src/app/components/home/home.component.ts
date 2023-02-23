import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formDataArr:any=[];
  formData:any={
    fullname:{
      fname:'',
      mname:'',
      lname:'',
    },
    email:'',
    phone:'',
    address1:'',
    address2:'',
    city:'',
    zip:''
  }
  
  dataId=0;
  constructor(private fb:FormBuilder) { 
  }
  ngOnInit(): void {
    const localdata=localStorage.getItem('Data')
    if(localdata!=null){
      this.formDataArr=JSON.parse(localdata)
    }
  }

  callbackForm:any=this.fb.group({
    'id':this.fb.control(""),
    'Name':this.fb.group({
      'fname':this.fb.control("",Validators.required),
      'mname':this.fb.control(""),
      'lname':this.fb.control("",Validators.required)
    }),
    'email':this.fb.control("",[Validators.required,Validators.email]),
    'phone':this.fb.control("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    'address1':this.fb.control("",[Validators.required]),
    'address2':this.fb.control(""),
    'city':this.fb.control("",[Validators.required]),
    'zip':this.fb.control("",[Validators.required,Validators.pattern('[0-9]{6}')]),
  })
  
  submitted=false
  submit(){
  this.submitted=true
  this.formData = this.callbackForm.value;
    console.log(this.formData)
    this.formDataArr.push(this.formData)
    localStorage.setItem('Data', JSON.stringify(this.formDataArr));
}
  
  onEdit(data:any){
    debugger
    this.formData=data
    this.callbackForm.value=this.formData
  }

}
