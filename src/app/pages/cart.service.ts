import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http: HttpClient) { }

  
  public createProduct(createData:any){
    console.log("Inside SignUp method");
    return this.http.post("http://localhost:2909/cart/addDetail",createData)
  }

  public showAllData(){
    return this.http.get("http://localhost:2909/cart/showAllData");
  }
}
