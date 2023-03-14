import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
  }

 

getloginStatus(email:string, password:string){
   return this.http.get("http://localhost:8080/user/login?email="+email+"&password="+password);
 }

 getUserIdByToken(token:any){
   return this.http.get("http://localhost:8080/user/getIdByToken/"+token);
 }
 
 
 
 registerUser(userRegistrationModel:any){
   return this.http.post("http://localhost:8080/user/register",userRegistrationModel);
 }

 
}