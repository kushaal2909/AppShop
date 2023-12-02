import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from '../../service/userlogin.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  productlist:any

  productData = {
    productName:'',
    price:''
  }

  cartData = {
    productName: '',
    price:''
  }
  

  constructor(private routes:Router,
              private _route:ActivatedRoute,
              private userLogin : UserloginService
              ){}

  dataUser:any
  id:any
  ngOnInit(): void {

        this.id =this._route.snapshot.params['custId']
        console.log(this.id);

        this.userLogin.showAllData().subscribe((data:any)=>{
       
          this.productlist=data
          console.log(data);
          
          
        }) 


    }

    addToCart(){
      this.userLogin.addProduct(this.productData).subscribe((data:any)=>{
        alert("Item Added");
        console.log(data);

      })
    }
      
  }
  

 
