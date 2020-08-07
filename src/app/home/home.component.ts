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
    @Input() user: string;
    inputs; 
    Data: any;
    Following;
     headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    ngOnInit() {
      
      this.getUser()
      this.geFollowers()
    }
    
    // getHover(){
    //   let ss = this.apiService.getHoverCard().subscribe(data => console.log('Hover card', data));
    //   console.log('Hover carddd', ss)
    // }
    DT;
    // making http request for the  data 
    getUser(){
        this.input.valueChanges.pipe(debounceTime(500),
         distinctUntilChanged())
         .subscribe((keywords: string) => {
            this.apiService.getUsers(keywords)
            .subscribe(data=>{
              this.user = this.apiService.usernamez;
              this.Data = data;
              this.Data = Array.of(this.Data.login)
              console.log('user', this.Data)
              // this.geFollowers()
            }, 
            err => console.log(err),
            () => console.log())
          }); 
         
    }
     geFollowers(){
      this.input.valueChanges.pipe(debounceTime(500),
         distinctUntilChanged())
         .subscribe((keywords: string) => {
            this.apiService.getFollowers(keywords)
            .subscribe(data=>{
              this.DT = this.apiService;
              // this.Data = data;
              this.DT = Array.of(this.Data.login)
              console.log('ff', this.Data)
              // this.geFollowers()
            }, 
            err => console.log(err),
            () => console.log())
          }); 



        // this.apiService.getFollowers(n).subscribe(dat =>{
        //   console.log('followers', dat)
        // })
      }

  }
