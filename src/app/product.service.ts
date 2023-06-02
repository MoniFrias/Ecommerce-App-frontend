import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private findAllUrl = "http://localhost:8089/product/findAll";
  private saveUrl = "http://localhost:8089/product/save";
  private findByCategoryUrl = "http://localhost:8089/product/findByCategory";

  constructor(private httpClient: HttpClient) { }


  obtenerListaProduct(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.findAllUrl}`);
  }

  registrarProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.saveUrl}`, product);
  }

  findByCategoryProducts(category: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.findByCategoryUrl}/${category}`);
  }

}
