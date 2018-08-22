import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".iziModal").iziModal({
      width: 500,
      radius: 5,
      padding: 20,
      top:50,
      loop: true
    });
  }

}
