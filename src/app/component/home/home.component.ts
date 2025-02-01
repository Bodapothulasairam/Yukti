import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/apiService';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule,MatIconModule,CommonModule,
    MatButtonModule,RouterModule,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  features = [
    {
      icon: 'search',
      title: 'Automated Job Search',
      description: 'Our application searches for job opportunities across multiple portals on your behalf.'
    },
    {
      icon: 'assignment',
      title: 'Auto-fill Applications',
      description: 'Automatically fill out job applications with your pre-saved information.'
    },
    {
      icon: 'notifications',
      title: 'Real-time Notifications',
      description: 'Receive real-time notifications about new job postings and application statuses.'
    }
  ];
  constructor(private apiService: ApiService) {
  }
  ngOnInit() {
  }
    
}
