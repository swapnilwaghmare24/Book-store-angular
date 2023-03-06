import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/bookstoreservice/book.service';
import { CartModel } from 'src/app/model/cartmodel';
import { CartService } from 'src/app/bookstoreservice/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:any;
  sortby!: string;

  search: any;
  carts!: any;
  userId: any=1;
  myCart: CartModel = new CartModel(0, 0, 0);


  constructor(private bookService:BookService, private cartService:CartService){ }

  ngOnInit(): void {
    
    this.sortby = "default"
 
    this.bookService.getAllBooks().subscribe((getData: any) => {
      console.log(getData)
      this.books = getData;
    });
    this.getAllCart();
  }

  getAllCart() {
    this.cartService.getAllCarts().subscribe(mydata => {
      this.carts = mydata;
    });
  }

  addToCart(bookId: number) {
    let i = 0
    if (this.carts.data != 0) {//Checking if thecart is empty
      for (; i < this.carts.data.length; i++) {//checking till n-1
        if (this.carts.data[i].book.bookId == bookId) {
          alert("book is already in cart");

          break;
        }
      }

      if (i == this.carts.data.length) {//in the nth 
        this.myCart.bookId = bookId;
        this.myCart.userId = this.userId;
        this.myCart.quantity = 1;
        this.cartService.saveCart(this.myCart).subscribe((getdata: any) => {
         
          this.carts = getdata;
          if(this.carts!=null)
          {
            alert("book added to cart");
          }
         
          //window.location.reload();

        });
        window.location.reload();

      }
    } else {//if no data in cart adds the items
      this.myCart.bookId = bookId;
      this.myCart.userId = this.userId
      this.myCart.quantity = 1;
      this.cartService.saveCart(this.myCart).subscribe((getdata: any) => {
       
        this.carts = getdata;
        if(this.carts!=null)
        {
          alert("book added to cart");
        }
       
       // window.location.reload();
      });
    }
  }

  sort() {
    if (this.sortby == "Increasing") {
      this.bookService.sortBookInAscending().subscribe((data: any) => {
        this.books = data;

      });
    } if (this.sortby == "Decreasing") {
      this.bookService.sortBookInDescending().subscribe((data: any) => {
        this.books = data;

      });
    } if (this.sortby == "Sort By Relevance") {
      this.bookService.getAllBooks().subscribe((data: any) => {
        this.books = data;

      });
    }
  }

 
  searchByBookname() {
    if (this.search != '') {
      this.bookService.searchBookByName(this.search).subscribe((getData: any) => {
        this.books = getData;
      });
    }
    else {
      this.ngOnInit();
    }
  }

}

