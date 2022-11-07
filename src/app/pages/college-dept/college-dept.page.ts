import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; // added


@Component({
  selector: 'app-college-dept',
  templateUrl: './college-dept.page.html',
  styleUrls: ['./college-dept.page.scss'],
})
export class CollegeDeptPage implements OnInit {

// Added . papuntang com-sci page
  constructor(private route: Router) { }
  ComSci() {
    this.route.navigate(['/com-sci']);
  }

  toUserProfile() {
    this.route.navigate(['/user-profile']);
  }

  exit() {
    this.route.navigate(['/login']);
  }

  /*
  constructor() { }
*/
  ngOnInit() {
  }

}
