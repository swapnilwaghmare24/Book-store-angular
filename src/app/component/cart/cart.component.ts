import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/bookstoreservice/cart.service';
import { UserService } from 'src/app/bookstoreservice/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  carts: any;
   
   imagePath = "../../../assets/bookimg/"
 
  
   userId!: any;

 
   token=this.router.snapshot.paramMap.get("token")
 
  
   constructor(private route: Router, private cartService: CartService, userService: UserService,private router:ActivatedRoute) { }
 
  
   ngOnInit(): void {
     this.getAllCart();
   }
 
 
  
   tohomePage(){
     this.route.navigate(["home",this.token])
   }
 

   getAllCart() {
     this.cartService.getAllCartsData().subscribe((getData: any) => {
       if (getData.data.length == undefined) {
         this.route.navigate(["home",this.token]);
       }
       this.carts = getData;
       this.userId = this.carts.data[0].user.userId
 
     })
   }
 
   
   deleteCart(cartId: number) {
    
     this.cartService.deleteCartByCartId(cartId).subscribe(data => {
      window.location.reload();
      
     });
   }

   updateCartadd(cartId: number, cart: any) {
    cart.quantity = cart.quantity + 1;
   
    this.cartService.updateCartByCartQuantityByCartId(cartId, cart.quantity).subscribe(data => {
     
    });

  }

  // when user hits "-" button in the view it is triggered parametes : cartID , cart model 
  updateCartsubstract(cartId: number, cart: any) {
    cart.quantity = cart.quantity - 1;
    console.log("cartQuantity"+cart.quantity);
   
    
     this.cartService.updateCartByCartQuantityByCartId(cartId, cart.quantity).subscribe(data =>{
      
       window.location.reload()
     });
    }
  
   goToupdateUserComponent() {
     this.route.navigate(["update", this.token]);
 
   }

}
