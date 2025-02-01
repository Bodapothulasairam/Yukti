import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from '../../services/commonService';
import { delay } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [MatToolbarModule, MatButtonModule,
    MatIconModule, MatButtonToggleModule, MatCheckboxModule,
    FormsModule, CommonModule, RouterModule, CommonModule,
    ReactiveFormsModule, MatSidenavModule, MatListModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  buttons = [
    { label: 'Home', path: '/' },
    { label: 'Sign Up', path: '/sign-up' },
    { label: 'Sign In', path: '/login' }
  ]
  selectedButton = "";
  isLoggedin = false;
  constructor(private commonService: CommonService) {
  }
  ngOnInit() {
    if(!this.commonService.getLoggedIn()){
      this.commonService.updateData(this.buttons);
      this.checkForUser();
    }
  }

  checkForUser() {
    this.commonService.data$.subscribe((updatedMenu) => {
      if(this.commonService.getLoggedIn())
      {
        this.buttons = updatedMenu;
        this.isLoggedin = true;
      }
    });
  }
}
