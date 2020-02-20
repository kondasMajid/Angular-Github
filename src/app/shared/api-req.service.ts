import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { User } from './user.model';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiReqService {
  private ApiURL = environment.ApiUrl;
  userPath = 'users/'
  repos = '/repos';
  username;

  constructor(private http: HttpClient) { }
  getUsers(username: string) {
    let result = this.http.get<User>(this.ApiURL + this.userPath + username)
    return result;
  }

  getRepos(data : string) {
    return this.http.get<User>(this.ApiURL+ this.userPath+data +'/repos')
    // return repos;
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