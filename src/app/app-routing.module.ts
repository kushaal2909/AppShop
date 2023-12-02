import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
   },
  {
    path:'',
    component:WelcomeComponent, 
    pathMatch:'full'
  },
  {
    path:'create',
    component :CreateUserComponent,
    pathMatch:'full'
  },
  { path: 'products', component: ProductsComponent, pathMatch: 'full'},
  
  { path: 'cart', component: CartComponent, pathMatch: 'full'}
//   {
//     path:'update/:custId',
//     component: UpdateStudentComponent,
//     pathMatch:'full'
//   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

