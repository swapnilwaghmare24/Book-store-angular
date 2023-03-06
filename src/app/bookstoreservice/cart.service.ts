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

  
  getAllCarts(){
    return this.http.get("http://localhost:8080/cart/getall");
  }
}
