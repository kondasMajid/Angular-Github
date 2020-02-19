import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { User } from './user.model';
import {environment} from '../../environments/environment'

import { tap } from 'rxjs/operators';

export class GitHubHttpInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<User>, next: HttpHandler ){

       const newRequest = req.clone({
            params: new HttpParams().append('made', 'for fun').append('author', '@codejack :)'),
            headers: req.headers.set(
                  'Authorization', environment.token ,
                )
        })

        return next.handle(newRequest).pipe(tap(succ => console.log(succ),
        err =>  {
            if(err.status ===401){
                alert('you not authenticated')
                // console.error('you not authenticated')
            }else{
                // console.log('You are authenticated')
                alert()
            }
        }));
    }
}