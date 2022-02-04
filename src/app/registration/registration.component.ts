import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  hide = true

  constructor(private formBuilder: FormBuilder, private _registrationService: AppServiceService) { }

  profileForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email :['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }
  
  saveForm(){
    console.log(this.profileForm.value)
    this._registrationService.getData(this.profileForm.value)
      .subscribe((response) => {
        console.log('Resposne from API is ', response);
      }, (error) => {
        console.log('Error is ', error);
      })
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

}
