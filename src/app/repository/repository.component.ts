import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiReqService } from '../shared/api-req.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  [x: string]: any;
  userz: string;
  input: "hello world";
  inz;
  
  normal = 'text view child'
  constructor(private APiService: ApiReqService) {


    // this.input = new FormControl();

    //loging view child
    // console.log('target', this.target)
   }
 
  ngOnInit() {
    // this.getRepos()
  }

  getRepos(){
      this.APiService.getRepos().subscribe((res) => console.log('repos', res))
      this.userz = this.APiService.username;
  }

  //========== View child for same component===>
  //Adding view child
    @ViewChild('target', {static: false}) target:ElementRef ;


    // log @viewchild
    ngAfterViewInit(){
      console.log(this.target.nativeElement.innerText)
    }



}
