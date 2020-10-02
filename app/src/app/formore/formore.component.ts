import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formore',
  templateUrl: './formore.component.html',
  styleUrls: ['./formore.component.css']
})
export class FormoreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('userLoggedIn')) {
      this.router.navigate(['login']);
    }
  }

}
