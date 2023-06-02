import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  products: Product[] =[];
  categories: Product[] =[];
  category: string;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit(): void{
    this.obtenerProducts();
  }

  private obtenerProducts(){
    this.category = this.route.snapshot.params['category'];
    this.productService.findByCategoryProducts(this.category).
    subscribe(dato =>{
      this.products=dato;
    });
  }

  selectFilter(category: string){
    this.router.navigate(['categories', category]);
  }

  createProduct(){
    this.router.navigate(['createProduct']);
  }
}
