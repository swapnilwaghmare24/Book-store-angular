import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }


  postOrder(order:any){
    return this.http.post("http://localhost:8080/order/insertorder",order);
  }
  getAllOrders(){
    return this.http.get("http://localhost:8080/order/getallorders");
  }
 
  

}
