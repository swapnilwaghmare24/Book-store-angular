import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/bookstoreservice/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  usertoken: any = this.route.snapshot.paramMap.get('token');
 userId:any

 
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

 // user: DeliveryModel = new DeliveryModel("", "", "", "");

  ngOnInit(): void {
 
    // this.userService.getUserIdByToken(this.usertoken).subscribe((data:any)=>{
    //   this.userId=data.data.userId;  

    //   this.userService.getUserByUserId(this.userId).subscribe((getData: any) => {
    //     this.user = getData.data;
    //   });
    // });
  
  }

 
  toHomePage() {
    this.router.navigate(["home",this.usertoken]);
  }

  
  updateUser() {
   
      this.router.navigate(["ordersummery",this.usertoken]);
      
    
  }

}
