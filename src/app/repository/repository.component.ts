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
  input: "hello world";
  inz;

  @Input() keywords: string;
  normal = 'text view child'
  constructor(private APiService: ApiReqService) {


    // this.input = new FormControl();

    //loging view child
    // console.log('target', this.target)
   }
 
  ngOnInit() {
    // this.getRepos()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.keywords.currentValue);
    this.APiService.getRepos(changes.keywords.currentValue).subscribe((res) => console.log('repos', res))
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
