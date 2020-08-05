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
  apiFollowers= 'https://api.github.com/users/kondasMajid/following'
  username; //passing to the user input in the home component

  constructor(private http: HttpClient) { }

  //return users
  getUsers(username: string) {
    let result = this.http.get<User>
    (this.ApiURL + this.userPath + username)
    return result;
  }

  getRepos(data : string): Observable<any> {
    return this.http.get<any[]>(this.ApiURL+
       this.userPath+data +'/repos')
    // return repos;
  }  

  // getFollowers(){
  //   return this.http.get<any[]>(this.apiFollowers)
  // }

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
