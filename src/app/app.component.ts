import { Component } from '@angular/core';
import { ApiReqService } from './shared/api-req.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitHub-intercept';

  constructor(private ApiService : ApiReqService){
    // console.log(this.getUser())
  }
  // getUser(){
  //  return this.ApiService.getUsers();
  // }

}
