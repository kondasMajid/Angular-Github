import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { User } from './user.model';
import { catchError } from 'rxjs/operators';

    
@Injectable({
  providedIn: 'root'
})
export class ApiReqService {
  private BASE_URL = environment.BASE_URL;
  userRoute = 'users/'
  repos = '/repos';
  apiFollowers= '/following'
  usernamez:any; //passing to the user input in the home component

  perPage='?per_page=100';
  constructor(private http: HttpClient) { }

   headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github.v3.raw',
    'Authorization': 'token INSERTACCESSTOKENHERE'
  }
  
  //return users
  getUsers(username: string) {
    let result = this.http.get<User>
    (this.BASE_URL + this.userRoute + username)
    this.usernamez = result;
    this.usernamez.login;
    console.log('Username',username)
    return result;
    
  }
  GerRep = this.getRepos;
 getRepos(data : string): Observable<any> {
    return this.http.get<any[]>(this.BASE_URL+
       this.userRoute+data +'/repos')
      //  console.log('ssssss', this.username)
    // return repos;
    // this.getFollowers(data);
  }  

  
 getFollowers(data:any): Observable<any>{
  let params = new HttpParams().append('param', 'value');
      return this.http.get<any[]>(this.BASE_URL+
      this.userRoute+data +'/followers?page=1&per_page=100');
 }

 getFollowing(data:any): Observable<any>{
  let params = new HttpParams().append('param', 'value');
      return this.http.get<any[]>(this.BASE_URL+
      this.userRoute+data +'/following?page=1&per_page=100');
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
