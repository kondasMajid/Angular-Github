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
  userRoute = 'users/'
  repos = '/repos';
  apiFollowers= 'following'
  username; //passing to the user input in the home component

  constructor(private http: HttpClient) { }

  //return users
  getUsers(username: string) {
    let result = this.http.get<User>
    (this.ApiURL + this.userRoute + username)
    return result;
  }

  getRepos(data : string): Observable<any> {
    return this.http.get<any[]>(this.ApiURL+
       this.userRoute+data +'/repos')
    // return repos;
  }  

  getFollowers(dat): Observable<any>{
  let ins = this.http.get<any[]>(this.ApiURL+this.userRoute+dat+'/followers')
    // https://api.github.com/users/kondasMajid/followers
    return ins;
  }
  getFollows(dad): Observable<any>{
    let ins = this.http.get<any[]>(this.ApiURL+this.userRoute+dad+'/following')
      return ins;
    }

  // getHoverCard(){
  //   let hovercard = this.http.get<User>
  //   (this.ApiURL + this.userRoute + this.username+'/hovercard')
  //   return hovercard;
    
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
