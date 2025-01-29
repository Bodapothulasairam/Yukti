import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root' 
})
export class ApiService{
  private baseUrl = 'http://localhost:8080/user/'; // Replace with your API base URL


  constructor(private http: HttpClient) {}
      
  public registerUser(user: User): Observable<any> {
    console.log(JSON.stringify(user));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(user);    
    return this.http.post(`${this.baseUrl}registerUser`, body,{headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle error logic here
    return throwError(() => new Error('Something went wrong'));
  }
}