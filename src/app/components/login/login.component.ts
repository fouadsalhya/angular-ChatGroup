import Swal from 'sweetalert2';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password:any;
  constructor(
             private authService:AuthService,
             private router:Router,
             ) { }

  ngOnInit(): void {
  }
 
   onLogin() {
     this.authService.Login(this.email,this.password)
        .then(auth => {
          if(auth) {
             Swal.fire({
               title:'login succefully',
               icon:'success',
               timer:2000
             })
            this.router.navigate(['/group'])
            }
        }).catch(error => {
          Swal.fire({
            title:'login faild',
            text:`${error}`,
            icon:'error',
            footer:'verfier un autre fois'
           
          })
        })
   }

   

}
