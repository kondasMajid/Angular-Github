import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { User } from './user.model';


import { tap } from 'rxjs/operators';

export class GitHubHttpInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<User>, next: HttpHandler ){
        const newRequest = req.clone({
            headers: req.headers.set(
                'Authorization', 'token-found' )
        })

        console.log(newRequest)
        // console.log(newRequest.body)

        return next.handle(newRequest).pipe(tap(succ => console.log('succes auth',succ),
        err => {
            if(err.status ===401){
                console.error('you not authenticated')
            }
        }));
    }

}