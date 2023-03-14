import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/bookstoreservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private userService: UserService) { }


  email!: string;


  password!: string;


  status: any;

  userId!: any;
 

  // Token to set in request param
  token!: string;
  ngOnInit(): void {

  }

  // On Submit checks whether the login credentials are correct or not if correct then redirects to home page 
  submitTestLoginStatus() {
    this.userService.getloginStatus(this.email, this.password).subscribe((getData: any) => {
     
      this.token = getData.data;
      console.log(this.token)
      if(this.token!=null)
      {
        this.router.navigate(["home", this.token]);
      }
     
    });
   
    

}

onClickRedirectToRegister() {
  this.router.navigate(["register"]);
}


onClickGotoForgotPassword() {
  this.router.navigate(["forgotpassword"]);
}

onClickRedirectToVerification(){
 this.router.navigate(["verification"]);
}
}