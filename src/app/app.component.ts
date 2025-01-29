import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { CommonService } from "./services/commonService";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-material-app';

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setIsLoggedIn(false);
  }

}
