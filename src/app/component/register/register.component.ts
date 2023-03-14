import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/bookstoreservice/user.service';
import { UserRegistrationModel } from 'src/app/model/userregistrationmodel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  status!: number;


  constructor(private router: Router, private service: UserService) { }


  userModel: UserRegistrationModel = new UserRegistrationModel("", "", "", "","");

  ngOnInit(): void {
  }

  
  onClickSaveModelRedirectToHome() {
    this.service.registerUser(this.userModel).subscribe((getData: any) => {
    console.log(getData.data);
    this.status = getData.data;
    if(this.status != null){
      alert("User registered successfully");
      this.router.navigate(["login"]);
    }
   else
   {
    alert("Registraion failed");
    this.router.navigate(["register"]);
  }
    });

  }


 
  loginPage() {
    this.router.navigate(["login"]);
  }


}
