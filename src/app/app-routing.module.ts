import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'categories/:category', component: CategoriesComponent},
  {path: 'categories1/:category', component: CategoriesComponent},
  {path: 'categories2/:category', component: CategoriesComponent},
  {path: 'categories3/:category', component: CategoriesComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'createProduct', component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
