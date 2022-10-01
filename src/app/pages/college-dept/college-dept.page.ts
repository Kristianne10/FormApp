import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; // added


@Component({
  selector: 'app-college-dept',
  templateUrl: './college-dept.page.html',
  styleUrls: ['./college-dept.page.scss'],
})
export class CollegeDeptPage implements OnInit {

// Added
  constructor(private route: Router) { }
  ComSci() {
    this.route.navigate(['/com-sci']);
  }
 ////////////////////// 

  /*
  constructor() { }
*/
  ngOnInit() {
  }

}
