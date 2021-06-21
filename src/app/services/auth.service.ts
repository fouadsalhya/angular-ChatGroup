import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private auth:AngularFireAuth) {}

  Login(email:any,password:any) {
    return new Promise((resolve,reject) => {
      this.auth.signInWithEmailAndPassword(email,password)
       .then((user) => resolve(user), (error) => reject(error))
    })
  }

  Registre(email:any,password:any) {
    return new Promise((resolve,reject) => {
      this.auth.createUserWithEmailAndPassword(email,password)
         .then((user) => resolve(user), (error) => reject(error))
    })
  }
  
  getAuth() {
   return this.auth.authState.pipe(
      map(auth => auth)
    )
  }

  logout() {
    this.auth.signOut()
  }
 
  

              
}
