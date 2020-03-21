import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ApiReqService } from '../shared/api-req.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RepositoryComponent } from '../repository/repository.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


     input: FormControl;
    constructor(private apiService: ApiReqService, ) {
      this.input = new FormControl();
      console.log(this.getUser())
      
    }
    @Input() user: string;
    inputs; 
    Data: any;


    ngOnInit() {}

    
    // making http request for the  data 
    getUser(){
        this.input.valueChanges.pipe(debounceTime(500),
         distinctUntilChanged())
         .subscribe((keywords: string) => {
            this.apiService.getUsers(keywords)
            .subscribe(data=>{
              this.user = this.apiService.username;
              this.Data = data;
              this.Data = Array.of(this.Data)
              // console.log('show', this.Data)
            }, 
            err => console.log(err),
            () => console.log())
          });
    }
}   
