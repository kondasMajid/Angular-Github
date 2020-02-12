import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { User } from './user.model';
import { catchError } from 'rxjs/operators';

// import { Observable } from 'rxjs/observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiReqService {


  private ApiURL = environment.ApiUrl;
  userPath = 'users/'
  username;
  
  constructor(private http: HttpClient) {
    // console.log('llok' ,this.getUsers())    
  }


  // headerSet = {
  //   'Content-Type': 'application/json',
  //   'Authorization': this.token,
  //   'token' : 'b79c18eec0f02499c95b8bf17ab25b85a2196ca3'
  // }

  // httpOptions = {
  //   httpHeader: new HttpHeaders(this.headerSet)
  // }

  getUsers(username: string) {
    let result = this.http.get<User>(this.ApiURL + this.userPath + username)

    return result;

  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}












// b79c18eec0f02499c95b8bf17ab25b85a2196ca3