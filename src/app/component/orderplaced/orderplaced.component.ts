import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/bookstoreservice/order.service';
import { UserService } from 'src/app/bookstoreservice/user.service';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.css']
})
export class OrderplacedComponent {

  order: any;
  orderLength!:number;
  token=this.route.snapshot.paramMap.get("token")

  
  constructor(private router: Router, private orderService: OrderService, private userService: UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {

   
    this.orderService.getAllOrders().subscribe((getData: any) => {
      this.order = getData;
      console.log("the order is :",this.order)
      console.log(this.order.data.length)
      this.orderLength=this.order.data.length-1;
     
    })

   

  }

  
  toHomePage() {
    this.router.navigate(["home",this.token]);
  }

  goToDashboard() {
    this.router.navigate(["home",this.token]);

  }
 


}
