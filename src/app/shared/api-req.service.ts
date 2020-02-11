import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user.model';

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

  getUsers(username: string) {
    let result = this.http.get<User>(this.ApiURL+this.userPath+username)
    return result;
    // console.log(res)
    }

}
