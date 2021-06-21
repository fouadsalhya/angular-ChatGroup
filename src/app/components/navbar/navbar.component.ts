import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   loggedIn:boolean=false;
  constructor(
               private authService:AuthService,
               private router:Router
              ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false
      }
    })
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login'])

  }

}
