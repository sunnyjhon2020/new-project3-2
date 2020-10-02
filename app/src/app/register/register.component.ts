import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  pattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private apiService: UsersService) { }

  ngOnInit() {
  }

  onClickSubmit(data: any) {
    this.apiService.postData(data).subscribe(res => {
      if (res.code == 200) {
        this.model.success = true;
        this.model.failure = false;
      }
    }, err => {
      if (err && err.status == 400) {
        this.model.failure = true;
        this.model.success = false;
      }
    });
  }

}
