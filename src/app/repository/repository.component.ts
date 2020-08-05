import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiReqService } from '../shared/api-req.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit, OnChanges {

  repoLength;
  [x: string]: any;
  repos: any[];
  stack;
  @Input() keywords: string;
  constructor(private APiService: ApiReqService) { }


  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.keywords.currentValue);
    this.APiService.getRepos(changes.keywords.currentValue).subscribe(res => {
      console.log('repos', res)
      this.repos = res;
      this.repoLength = res.length;
      console.log('repos', this.repoLength)
    })

  }

}
