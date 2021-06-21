import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
              private afs:AngularFireAuth,
              private router:Router
              ){}
  canActivate(): Observable<boolean> {
    return this.afs.authState.pipe(
      map(auth => {
        if(!auth) {
          this.router.navigate(['/login'])
          return false
        }else {
           return true
        }
      })
    )
  }
  
}
