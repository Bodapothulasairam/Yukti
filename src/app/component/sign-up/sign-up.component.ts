import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from '@angular/material/button';
import { MustMatch } from '../../model/MustMatch';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { User } from "../../model/User.model";
import { CommonService } from '../../services/commonService';
import { ApiService } from '../../services/apiService';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  constructor(private router: Router, private _formBuilder: FormBuilder, 
    private commonService: CommonService, private apiService:ApiService ) {

  }

  ngOnInit() {
    this.commonService.setSelectedButton('Sign Up');
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
    this.thirdFormGroup = this._formBuilder.group({
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
  }
  // Method to get form values
  signUp() {
    const firstFormValues = this.firstFormGroup.value;
    const secondFormValues = this.secondFormGroup.value;
    const thirdFormValues = this.thirdFormGroup.value;

    const allFormValues = {
      ...firstFormValues,
      ...secondFormValues,
      ...thirdFormValues
    };
    
    const user: User = {
      firstname: allFormValues.firstName,
      lastname: allFormValues.lastName,
      email: allFormValues.email,
      password: allFormValues.password,
      mobile: allFormValues.mobile,
      address: allFormValues.address,
      city: allFormValues.city,
      state: allFormValues.state,
      zipcode: allFormValues.zipCode
    };
    this.apiService.registerUser(user).subscribe({
      next: (response:any) => {
        if(response=='OK') {
          this.commonService.setSelectedButton('Sign In');
          this.router.navigate(['/login']);
        }
        alert('Registration Successful!');
      },
      error: (error:any) => {
        console.error('Error registering user:', error);
        alert('Registration Failed. Please try again.');
      }
    });
    
  }
// Method to trigger validation and navigate to the next step
nextStep(stepper: any, formGroup: FormGroup) {
  if (formGroup.valid) {
    stepper.next();
  } else {
    formGroup.markAllAsTouched();
  }
}
}