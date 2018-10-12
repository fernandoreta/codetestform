import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  default = 'advanced';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    password: '',
    subscription: '',
    gender: ''
  };
  submitted = false;
  regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  
  suggestUserName() {
    const suggestedName = 'Darth Vader';
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      subscription: 'advanced',
      password: '',
      gender: 'male'
    });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.subscription = this.signupForm.value.userData.subscription;
    this.user.password = this.signupForm.value.userData.password;
    this.user.gender = this.signupForm.value.userData.gender;

    this.signupForm.reset();
  }
  onReset(){
    this.signupForm.reset();
  }
}
