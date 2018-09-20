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
    //const val = this.form.value;
    console.log("login clicked");
    console.log(this.user.name);
    console.log(this.user.pass);


    this.authService.login(this.user)
      .subscribe(data => {
        this.router.navigateByUrl('/backPage');
        //console.log(data);

        //console.log(this.authService.isLoggedIn());

      })


  }

}
