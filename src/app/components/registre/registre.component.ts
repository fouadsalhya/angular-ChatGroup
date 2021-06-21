import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
 email:any;
 password:any;
  constructor(
               private authService:AuthService,
               private router:Router
              ) { }

  ngOnInit(): void {
  }

  onRegistre() {
    this.authService.Registre(this.email,this.password)
       .then(auth => {
         if(auth) {
           Swal.fire({
            title:'registre succefully',
            icon:'success',
            timer:2000
           })
           this.router.navigate(['/group']);
         }
       }).catch(error => {
         Swal.fire({
          title:'registre faild',
          text:`${error}`,
          icon:'error',
          footer:'verfier un autre fois'
         })
       })
  }
}
