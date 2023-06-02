import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  product: Product = new Product();
  productFound: Product;

  constructor(private productService: ProductService,
    private router: Router){}

  ngOnInit(): void{
  }

  guardarUser(){
    this.productService.registrarProduct(this.product)
    .subscribe(
      dato => {
        console.log(dato);
      }
    );
  }

  onSubmit(){
    this.guardarUser();
  }
}
