export class OrderModel {
    quantity:number;
    address:string;
    price:number;
    userId:any;
    bookId:any;
    cancel:boolean;

    constructor(quanity:number,address:string,bookId:any,price:number,userId:any,cancel:boolean){
        this.userId=userId;
        this.bookId=bookId;
        this.quantity=quanity;
        this.price=price;
        this.address=address;
        this.cancel=cancel;
    } 
}