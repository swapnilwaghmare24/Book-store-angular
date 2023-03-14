import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  saveCart(cart:any){
    return this.http.post("http://localhost:8080/cart/addtocart",cart);
  }

  
  getAllCarts(token:any){
    return this.http.get("http://localhost:8080/cart/all/"+token);
  }

  getAllCartsData(){
    return this.http.get("http://localhost:8080/cart/getall/");
  }

  deleteCartByCartId(Id:any){
    return this.http.delete("http://localhost:8080/cart/remove/"+Id);
  }

  updateCartByCartQuantityByCartId(Id:any,quantity:any){
    return this.http.get("http://localhost:8080/cart/cartid/"+Id+"/qty/"+quantity)
  }

}
