import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authenticate(username: string,password: string){
    
    if(username === 'admin' && password === 'admin'){
      sessionStorage.setItem('authUser',username);   
      return  true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authUser');
    return !(user === null);
  }
}
