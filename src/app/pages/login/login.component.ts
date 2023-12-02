import { Component } from '@angular/core';
import { UserloginService } from '../../service/userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  userData= {
    email:'',
    password:''
    
  }

  

  

  constructor(private loginService :UserloginService, private router: Router){}

  
  formSubmit()
  {

    console.log("Inside Method");
    this.loginService.loginMethod(this.userData).subscribe((data:any)=>{
      this.router.navigateByUrl('/')
      
    })
    }

    signup(){
      this.router.navigateByUrl('/create')
    }

   }

   

