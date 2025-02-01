import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/commonService';
import { response } from 'express';
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

  constructor(private _formBuilder: FormBuilder, private router:Router, private commonService:CommonService) {}

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginValues = this.loginForm.value;
      localStorage.setItem('user', JSON.stringify({ isLoggedin: true }));
      this.commonService.setLoggedIn(true);
      if(loginValues)
      {
          this.commonService.updateData([
            { label: 'Dashboard', path: '/dashboard' },
            { label: 'Applied Jobs', path: '/applied-jobs' },
            { label: 'Profile', path: '/profile' },
            { label: 'Resume', path: '/resume' },
            { label: 'Settings', path: '/settings' }
          ]).subscribe((response: any) => {
            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 500);
          });
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onForgotPassword() {
    console.log('Forgot Password clicked');
  }
}

