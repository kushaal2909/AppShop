import { Component } from '@angular/core';
import { UserloginService } from '../../service/userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})


export class CreateUserComponent {

  userData= {
    firstname: '',
    lastname:'',
    phone:'',
    email:'',
    password:''
  }
  constructor(private userService: UserloginService, private router: Router){}
  formSubmit(){

  this.userService.createUser(this.userData).subscribe((data:any)=>{
    console.log(data);
  })

  setTimeout(() => {
    alert("Login Here to Continue")
  }, 500);
  
 
  this.router.navigateByUrl("/login")

}
login(){
  this.router.navigateByUrl("/login")
}
}

