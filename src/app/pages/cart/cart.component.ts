import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartlist:any

  cartData={
    productName:'',
    price:'',
    customerId:''
  }

  constructor(private routes:Router,
    private cartService: CartService,
    private _route:ActivatedRoute
    ){}

    dataUser:any
  id:any
  ngOnInit(): void {
    this.id =this._route.snapshot.params['custId']
        console.log(this.id);

        this.cartService.showAllData().subscribe((data:any)=>{
       
          this.cartlist=data;
          console.log(data);
          
        }) 


    }

}
