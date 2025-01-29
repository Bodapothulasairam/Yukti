import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../services/commonService';
@Component({
  selector: 'app-log-in',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setSelectedButton('Sign In');
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginValues = this.loginForm.value;
      console.log('Login Values:', loginValues);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onForgotPassword() {
    console.log('Forgot Password clicked');
  }
}
