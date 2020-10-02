import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'recipe';
  userLoggedIn: any;

  constructor (private router: Router, private apiService: UsersService) {}

  ngOnInit () {
    this.apiService.isUserLoggedIn().subscribe(res => {
      if (res) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    })
  }

}
