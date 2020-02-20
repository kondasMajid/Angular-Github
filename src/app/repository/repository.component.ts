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
  
  repos : any;
  stack;
  @Input() keywords: string;


  constructor(private APiService: ApiReqService) {}

 
  ngOnInit() {
    // this.getRepos()
    // console.log(this.stack)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.keywords.currentValue);
   this.repos = this.APiService.getRepos(changes.keywords.currentValue).subscribe(res =>  this.repos = res)
  // console.log('target', this.repos  )
  
  }

}
