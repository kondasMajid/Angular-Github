import { Component, OnInit } from '@angular/core';
import { ApiReqService } from '../shared/api-req.service';

@Component({
  selector: 'repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  user: string;

  constructor(private APiService: ApiReqService) { }

  ngOnInit() {
    this.getRepos()
  }

  getRepos(){
      this.APiService.getRepos(this.user).subscribe((res) => console.log('repos', res))
      this.user = this.APiService.username;
  }

}
