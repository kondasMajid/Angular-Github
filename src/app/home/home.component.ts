import { Component, OnInit } from '@angular/core';
import { ApiReqService } from '../shared/api-req.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  input: FormControl;
  constructor(private apiService: ApiReqService) {
    this.input = new FormControl();
    console.log(this.getUser())
    
   }
   store : []
   Data: any;
   user: string;
  ngOnInit() {}

  getUser(){
      this.input.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((keywords: string) => {
          this.apiService.getUsers(keywords).subscribe(data=>{
            this.user = this.apiService.username;
            this.Data = data;
            this.Data = Array.of(this.Data)
            // if(Array.isArray(data)){
            //   this.Data = data;
            //   console.log('show', this.Data) 
            // }
            // this.store.push(this.Data)
            console.log('show', this.Data.login)
          }, 
          err => console.log(err),
          () => console.log('users loaded successfully'))
        });
  }
} 
