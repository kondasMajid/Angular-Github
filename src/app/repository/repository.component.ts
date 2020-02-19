import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiReqService } from '../shared/api-req.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit, OnChanges {
  
  [x: string]: any;
  userz: string;
  
  repos ;
  stack;
  @Input() keywords: string;
  normal = 'text view child'
  constructor(private APiService: ApiReqService) {

    
    // this.input = new FormControl();

    //loging view child
    // 
   }
 
  ngOnInit() {
    // this.getRepos()
    // console.log(this.stack)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.keywords.currentValue);
   this.repos = this.APiService.getRepos(changes.keywords.currentValue).subscribe(res =>  this.repos = res)
  console.log('target', this.repos  )
  
  }




  // getRepos(){
  //     this.APiService.getRepos().subscribe((res) => console.log('repos', res))
  //     this.userz = this.APiService.username;
  // }

  //========== View child for same component===>
  //Adding view child
    @ViewChild('target', {static: false}) target:ElementRef ;


    // log @viewchild
    ngAfterViewInit(){
      console.log(this.target.nativeElement.innerText)
    }



}
