import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonService } from '../../services/commonService';

@Component({
  selector: 'app-nav-bar',
  imports: [MatToolbarModule, MatButtonModule,
    MatIconModule, MatButtonToggleModule, MatCheckboxModule,
    FormsModule, CommonModule, RouterModule,CommonModule,
    ReactiveFormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  buttons = [
    {label: 'Home', path: '/'},
    {label: 'Sign Up', path: '/sign-up'},
    {label: 'Sign In', path: '/login'}
  ]
  selectedButton = "";
  constructor(private commonService: CommonService) {
  }
  ngOnInit() {
    setTimeout(() => {
    this.selectedButton = this.commonService.getSelectedButton();
    }, 1000);
  }
}
