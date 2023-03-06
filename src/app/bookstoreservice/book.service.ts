import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getAllBooks():Observable<any>{
    return this.http.get("http://localhost:8080/book/getallbook");
  }

  sortBookInAscending() {
    return this.http.get("http://localhost:8080/book/bookascending");
  }

 
  sortBookInDescending() {
    return this.http.get("http://localhost:8080/book/bookdescending");
  }

  searchBookByName(name: string) {
    return this.http.get("http://localhost:8080/book/bookname/" + name);
  }

}
