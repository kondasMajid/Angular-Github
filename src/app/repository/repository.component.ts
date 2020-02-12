import { Component, OnInit } from '@angular/core';
import { ApiReqService } from '../shared/api-req.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  userz: string;
  input: FormControl;
  inz;
  constructor(private APiService: ApiReqService) {
    this.input = new FormControl();
   }

  ngOnInit() {
    // this.getRepos()
  }

  // getRepos(){
  //     this.APiService.getRepos(this.inz).subscribe((res) => console.log('repos', res))
  //     this.userz = this.APiService.username;
  // }

}
