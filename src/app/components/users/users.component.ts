import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiReqService } from 'src/app/shared/api-req.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  repoLength;
  [x: string]: any;
  Users: any[];
  stack;
  @Input() keywords: string;
  constructor(private APiService: ApiReqService) { }


  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes.keywords.currentValue);
    this.APiService.getUsersWithSimilarName(changes.keywords.currentValue).subscribe(res => {
      console.log('usersss innnn', res)
      this.Users = res.items;
      // this.repoLength = res.length;
      // console.log('repos', this.repoLength)
    })

  }
  
  // GetUsersWithSimilarName(): void {
  //   // Debounce user input with 300ms delay
  //   this.input.valueChanges
  //     .pipe(
  //       debounceTime(300),
  //       distinctUntilChanged(),
  //       switchMap(query => this.apiService.getUsersWithSimilarName(this.input.value))
  //     )
  //     .subscribe(
  //       response => {
  //         this.users = response.items;
  //         console.log('users list ', this.users)
  //       },
  //       error => {
  //         console.log('An error occurred:', error);
  //       }
  //     );
  // }


}
