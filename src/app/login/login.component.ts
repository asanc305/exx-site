import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user).subscribe(data => {
      this.router.navigateByUrl('/aboutUs');
    })
  }

}
