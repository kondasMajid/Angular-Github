import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { User } from './user.model';
import {environment} from '../../environments/environment'

import { tap } from 'rxjs/operators';

export class GitHubHttpInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<User>, next: HttpHandler ){

       const newRequest = req.clone({
            params: new HttpParams().append('made', 'Git Home').append('author', '@codejack :)'),
            headers: req.headers.set(
                  'Authorization', environment.token ,
                //   'Content-Type': 'application/json',
    // 'Accept': 'application/json',
                )
                
        })

        return next.handle(newRequest).pipe(tap(succ => console.log('successfull resp http'),
        err =>  {
            if(err.status ===401){
                // alert('you not authenticated')
                console.error('error 401')
            }else{
                console.log('other error found', err)
                // alert()
            }
        }));
    }
}   