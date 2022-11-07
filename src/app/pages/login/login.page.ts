// contains all the action from Login page

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router) { }
  toCollgedept() {
    // this.route.navigate(['/formana-tabnav']);
    this.route.navigate(['/college-dept']);

  }

  ngOnInit() {
  }

}
