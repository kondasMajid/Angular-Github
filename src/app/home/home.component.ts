import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, QueryList, ViewChildren, SimpleChanges } from '@angular/core';
import { ApiReqService } from '../shared/api-req.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RepositoryComponent } from '../repository/repository.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


     input: FormControl;
    constructor(private apiService: ApiReqService, ) {
      this.input = new FormControl();
      // console.log(this.getUser())
      
    }
    @Input() User: string; //interface to  user input
    @Input() User1: string;
    inputs; 
    Data: any; // will be user keep User Details
    Following;
    DT;
    Followers;
     headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    ngOnInit() {
            this.getUser()      
    }
    
    getUser(){
        this.input.valueChanges.pipe(debounceTime(500),
         distinctUntilChanged())
         .subscribe((keywords: string) => {
            this.apiService.getUsers(keywords)
            .subscribe(data=>{
              this.User = this.apiService.usernamez;
              this.User1 = data.login;
              this.Followers = Array.of(this.User1)
              this.Following = Array.of(this.User1)
              this.DT = data.login
              this.Data = data;
              this.Data = Array.of(this.Data)
              console.log('user', this.Data)
              console.log('DATA User', this.Data)
              console.log('DATA ')
              // this.geFollowers(this.user)
              console.log('Fellowers Details',this.geFollowers(this.Followers))
              console.log('Following',this.geFollowing(this.Following))
            }, 
            err => console.log(err),
            () => console.log())
          }); 
         
    }
     geFollowers(key:any){
        this.apiService.getFollowers(key)
            .subscribe(data=>{
              this.Followers = data;

              this.FollowersX = this.Followers;

              this.FollowersX.forEach(function(data){
                console.log(data[0], data[1].length);
              });

              this.Followers = Array.of(this.FollowersX)
              console.log('Followers', this.FollowersX)
            }, 
            err => console.log(err),
            () => console.log())
    }
 XX;
 FollowersX:any;
    geFollowing(key:any){
      this.apiService.getFollowing(key)
          .subscribe(data=>{
            this.Following = data;

            this.XX = this.Following;
            this.Following = Array.of(this.Following)

            console.log('Fellowing', this.Following)
            console.log('xxx', this.XX)
          }, 
          err => console.log(err),
          () => console.log())
  }
      
  }
