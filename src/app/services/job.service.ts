import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobsUrl = 'http://localhost:3000/results';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http.get(this.jobsUrl);
  }
}
