import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private http: HttpClient) { }


  public loginMethod(userloginData: any){
    console.log("Inside login method");
    return this.http.post("http://localhost:2909/users/login",userloginData)
   
  }

  public createUser(createData:any){
    console.log("Inside SignUp method");
    return this.http.post("http://localhost:2909/shopNest/signUp",createData)
  }

  public showAllData(){
    return this.http.get("http://localhost:2909/products/showAllData");
  }

  public addProduct(createProduct:any){
    console.log("Inside SignUp method");
    return this.http.post("http://localhost:2909/cart/addDetail",createProduct)
  }
}
