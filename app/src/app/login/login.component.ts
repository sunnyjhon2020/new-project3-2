import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private apiService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(data: any) {
    this.apiService.userLogin(data).subscribe(res => {
      if (res.code == 200) {
        localStorage.setItem('userLoggedIn', 'true');
        window.location.href = '/recipes';
      } 
    }, err => {
      this.model.loginErr = true;
    });
  }

}
