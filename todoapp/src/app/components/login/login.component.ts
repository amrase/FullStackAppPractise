import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = '';
  password = '';
  errorMessage:string="Invalid Credentials!"
  invalidLogin:boolean=false;
  welcomeMessage:string = "Welcome"
  constructor(private router: Router) {

  }

  handleLogin(){
    console.log(this.username);
    console.log(this.password);
    console.log(this.router.config);
    
    if(this.username === 'admin' && this.password === 'admin'){
      this.invalidLogin = false;
      this.router.navigate(['welcome']);
    }
    else {
        this.invalidLogin = true;
    }
    
  }

  ngOnInit(): void {
  }

}
