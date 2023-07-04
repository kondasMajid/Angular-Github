import { ApiReqService } from './../shared/api-req.service';
import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, QueryList, ViewChildren, SimpleChanges } from '@angular/core';
// import { ApiReqService } from '../shared/api-req.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { RepositoryComponent } from '../repository/repository.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


     input: FormControl;
  errorReturn: any;
  users: any;
  repositories: any;
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
 
    
    XX:any;

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
            // console.log('user', this.Data)
            // console.log('DATA User', this.Data)
            // console.log('DATA ')
            // this.geFollowers(this.user)
            // console.log('Fellowers Details',this.geFollowers(this.Followers))
            // console.log('Following',this.geFollowing(this.Following))
          }, 
          err => {
            console.log(err.error.message);
            this.errorReturn = err.error.message;
          },
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

 FollowersX:any;
    geFollowing(key:any){
      this.apiService.getFollowing(key)
          .subscribe(data=>{
            this.Following = data;

            this.XX = this.Following;
            this.Following = Array.of(this.Following)

            console.log('Fellowing', this.Following)
            console.log('followe', this.XX)
          }, 
          err => console.log(err),
          () => console.log())
  }



 getTrendingRepositories(){

  // this.apiService.getTrendingRepositories().subscribe(
  //   response => {
  //     this.repositories = response.items;
  //     console.log('trending', this.repositories);
  //   },
  //   error => {
  //     console.log('An error occurred for:', error);
  //   }
  // );

  this.apiService.getTrendingRepositories().subscribe(
    response => {
      this.repositories = response.items;
      console.log('ooooooo', this.repositories)
    },
    error => {
      console.log('An error occurred:', error);
    }
  );
 }

  // GetUsersWithSimilarName(){
  //   this.apiService.getUsersWithSimilarName(this.input.value)
  //   .subscribe(data=>{
  //     this.inputs = data;
  //     console.log('users list ', this.inputs.items)
  //   }, 
  //   err => console.log('userlist not show', err),
  //   () => console.log())
  // } 


  // Method to search for users with similar names using debounce
  // GetUsersWithSimilarName(): void {
  //   // Debounce user input with 300ms delay
  //   this.input.valueChanges
  //     .pipe(
  //       debounceTime(300),
  //       distinctUntilChanged(),
  //       switchMap(query => this.apiService.getUsersWithSimilarName(this.input.value))
  //     )
  //     .subscribe(
  //       response => {
  //         this.users = response.items;
  //         console.log('users list ', this.users)
  //       },
  //       error => {
  //         console.log('An error occurred:', error);
  //       }
  //     );
  // }

  ngOnInit() {
    this.getUser();
    // this.GetUsersWithSimilarName();
    this.getTrendingRepositories();
    
  }


  }

