import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

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
  constructor(private router: Router,
    public authService:AuthService) {

  }

  handleLogin(){
    if(this.authService.authenticate(this.username,this.password)){
      this.invalidLogin = false;
      this.router.navigate(['welcome',this.username]);
    }
    else {
        this.invalidLogin = true;
    }
    
  }

  ngOnInit(): void {
  }

}
